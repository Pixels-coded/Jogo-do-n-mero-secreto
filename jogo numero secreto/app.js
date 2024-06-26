let listaDeNumerosAleatorios = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
function exibirMensagemInicial() {
    exibirTextoTela('h1', 'Jogo do Número Secreto');
    exibirTextoTela('p', 'Escolha um número de 1 a 10!');
}

exibirMensagemInicial()

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosAleatorios.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNumerosAleatorios = [];
    }

    if (listaDeNumerosAleatorios.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaDeNumerosAleatorios.push(numeroEscolhido);
        console.log (listaDeNumerosAleatorios);
        return numeroEscolhido;
    }
    console.log (numeroSecreto)
}

function verificarChute(){
    let guess = document.querySelector('input').value;
   
    if (guess == numeroSecreto){
        exibirTextoTela('h1', 'acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemWin = `Parbéns, você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemWin)
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (guess > numeroSecreto){
            exibirTextoTela('p', 'o numero secreto é menor ein');
        }else{
            exibirTextoTela('p', 'o numero secreto é maior viu');
        }
        tentativas++;
        limparCampo ()
    }
}

function limparCampo(){
    guess = document.querySelector('input');
    guess.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

