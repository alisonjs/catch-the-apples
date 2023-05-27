import Personagem from './personagem.js'
import Item from './item.js'
import Monstro from './monstro.js'

// Obtém o contexto do canvas
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
// Criando uma lista de personagens
var p1 = new Personagem("red", 50, 50, 100, 100)

// Criando o objeto do item
var item = new Item(canvas);

// Variável para armazenar a quantidade de itens coletados
var itensColetados = 0;

// Criando o objeto do monstro
var monstros = [];
var personagens = [p1];
var personagemCapturado = false

// Loop de jogo
function gameLoop() {
    // Atualiza a lógica do jogo

    // Limpa o canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Movimentar o monstro
    if (!personagemCapturado) {
        movimentarMonstros()
        verificarColisao();
        moverPersonagem();
    }
    // Renderiza os gráficos
    draw(context)
    // Chama o próximo frame
    requestAnimationFrame(gameLoop);
}

// Inicia o jogo
function startGame() {
    // Adicione aqui a inicialização do jogo
    monstros = []
    // Inicia o loop de jogo
    gameLoop();
}

// Função responsável por renderizar os objetos em tela
function draw(context) {
    // Limpar o canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    exibirPontuacao(context)
    desenharMonstros(context)
    item.draw(context)
    desenharPersonagens(context)

    // Exibir a mensagem de captura
    if (personagemCapturado) {
        context.fillStyle = "rgba(0, 0, 0, 0.5)"; // Define a cor de fundo com transparência
        context.fillRect(0, 0, canvas.width, canvas.height); // Preenche todo o canvas com a cor de fundo
        context.fillStyle = "red";
        context.font = "24px Arial";
        context.fillText("Você foi capturado!", canvas.width / 2 - 100, canvas.height / 2);
    }
}

// Função para exibir pontuação
function exibirPontuacao(context) {
    context.fillStyle = "black";
    context.font = "16px Arial";
    context.fillText("Pontuação: " + 0, canvas.width - 120, 20);
}

// Função para desenhar os monstros
function desenharMonstros(context) {
    monstros.forEach(monstro => {
        monstro.draw(context)
    })
}

function movimentarMonstros() {
    monstros.forEach(monstro => {
        monstro.movimentar();
    })
}

// Função para desenhar os personagens na tela
function desenharPersonagens(context) {
    // Desenhar cada personagem
    for (var i = 0; i < personagens.length; i++) {
        var personagem = personagens[i];
        personagem.draw(context);
    }
}

// Registrando os eventos de teclado para movimentar os personagens
function moverPersonagem(){
    if (!personagemCapturado) {
        if (teclasPressionadas['KeyD']) {
            p1.moveUp(canvas)
        }
        if (teclasPressionadas['KeyA']) {
            p1.moveDown(canvas)
        }
        if (teclasPressionadas['KeyW']) {
            p1.moveLeft(canvas);
        }
        if (teclasPressionadas['KeyS']) {
            p1.moveRight(canvas)
        }
    }
}

// Verificar colisão entre o item e o personagem
function verificarColisao() {
    monstros.forEach(monstro => {
        if (
            p1.x < monstro.x + monstro.largura &&
            p1.x + p1.largura > monstro.x &&
            p1.y < monstro.y + monstro.altura &&
            p1.y + p1.altura > monstro.y
        ) {
            personagemCapturado = true; // Indicar que o personagem foi capturado
            setTimeout(function () {
                reiniciarJogo()
            }, 2000);
        }
    })


    if (
        p1.x < item.x + item.largura &&
        p1.x + p1.largura > item.x &&
        p1.y < item.y + item.altura &&
        p1.y + p1.altura > item.y
    ) {
        // Colisão com o personagem p1
        item.x = Math.random() * (canvas.width - item.largura);
        item.y = Math.random() * (canvas.height - item.altura);
    }
}

function reiniciarJogo() {
    // Limpar o canvas
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    personagemCapturado = false; // Remover a mensagem após alguns segundos
    p1.x = Math.random() * (canvas.width - p1.largura);
    p1.y = Math.random() * (canvas.height - p1.altura);
    item.x = Math.random() * (canvas.width - item.largura);
    item.y = Math.random() * (canvas.height - item.altura);
    itensColetados = 0; // Resetar a pontuação
    monstros.forEach(monstro => {
        monstro.x = Math.random() * (canvas.width - monstro.largura);
        monstro.y = Math.random() * (canvas.height - monstro.altura);
    })
}

// Objeto para armazenar o estado das teclas pressionadas
var teclasPressionadas = {};

// Função para lidar com o evento de tecla pressionada (keydown)
function teclaPressionada(event) {
    teclasPressionadas[event.code] = true;
}

// Função para lidar com o evento de tecla solta (keyup)
function teclaSolta(event) {
    teclasPressionadas[event.code] = false;
}

// Registrar os eventos de tecla pressionada e solta
document.addEventListener('keydown', teclaPressionada);
document.addEventListener('keyup', teclaSolta);

// Chama a função startGame quando a página é carregada
window.onload = startGame;