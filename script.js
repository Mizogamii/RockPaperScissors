let scoreJogador = 0
let scoreMaquina = 0

document.getElementById("papel").addEventListener("click", () => verificarBotao(1))
document.getElementById("pedra").addEventListener("click", () => verificarBotao(2))
document.getElementById("tesoura").addEventListener("click", () => verificarBotao(3))

function escolhaMaquina(){
    let numeroAleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return numeroAleatorio;
}

function contadorPontos(botaoClicado){
    let numeroAleatorio = escolhaMaquina();
    console.log(numeroAleatorio)

    if(botaoClicado == numeroAleatorio){ 
        scoreJogador++
        scoreMaquina++
    }else if((botaoClicado == 1 && numeroAleatorio == 2) || (botaoClicado == 2 && numeroAleatorio == 3) || (botaoClicado == 3  && numeroAleatorio == 1)){
        scoreJogador++
        console.log("Jogador")
    }else{
        scoreMaquina++
        console.log("Maquina")
    }
    
    atualizarPlaca()
}

function verificarBotao(botao){
    contadorPontos(botao)
    console.log("Botão clicado: ", botao)
}

function atualizarPlaca(){
    document.getElementById("jogadorScore").textContent = scoreJogador
    document.getElementById("maquinaScore").textContent = scoreMaquina
}