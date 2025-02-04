let scoreJogador = 0
let scoreMaquina = 0

const imagemEscolha = {
    0: "icons/all.png",
    1: "icons/paper.png",
    2: "icons/rock.png",
    3: "icons/scissors.png"
};

document.getElementById("escolhaUsuario").src = imagemEscolha[0];
document.getElementById("escolhaMaquina").src = imagemEscolha[0];

document.getElementById("papel").addEventListener("click", () => verificarBotao(1))
document.getElementById("pedra").addEventListener("click", () => verificarBotao(2))
document.getElementById("tesoura").addEventListener("click", () => verificarBotao(3))

function escolhaMaquina(){
    let numeroAleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return numeroAleatorio;
}

function contadorPontos(botaoClicado){
    let numeroAleatorio = escolhaMaquina();
    const mensagem = document.getElementById("mensagem")

    document.getElementById("escolhaUsuario").src = imagemEscolha[botaoClicado]
    document.getElementById("escolhaMaquina").src = imagemEscolha[numeroAleatorio]

    if(botaoClicado == numeroAleatorio){ 
        scoreJogador++
        scoreMaquina++
        mensagem.textContent = "Empate! Ponto para os dois!"
        mensagem.style.color = "#f0f8ff"
    }else if((botaoClicado == 1 && numeroAleatorio == 2) || (botaoClicado == 2 && numeroAleatorio == 3) || (botaoClicado == 3  && numeroAleatorio == 1)){
        scoreJogador++
        console.log("Jogador")
        mensagem.textContent = "Parabéns! Ganhou!"
        mensagem.style.color = "#00ff3c"
    }else{
        scoreMaquina++
        console.log("Maquina")
        mensagem.textContent = "Infelizmente meu anjo! Tente novamente"
        mensagem.style.color = "#ff0d00"
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

function encerrar(){
    console.log("Encerrar")
    scoreJogador = 0
    scoreMaquina = 0
    document.getElementById("mensagem").textContent = ""
    document.getElementById("escolhaUsuario").src = imagemEscolha[0];
    document.getElementById("escolhaMaquina").src = imagemEscolha[0];
    atualizarPlaca();
}