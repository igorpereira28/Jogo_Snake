let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let engolindo=document.getElementById("engolindo");
let game_over=document.getElementById("game_over");
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = "right";
let comida = {
    x: Math.floor(Math.random() * 15+1) * box,
    y: Math.floor(Math.random() * 15+1) * box
}

function criarBG() {
    context.fillStyle = "lightgreen"; // cor
    context.fillRect(0, 0, 16 * box, 16 * box); //tamanho
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(comida.x, comida.y, box, box)
}

document.addEventListener('keydown', update); //keydown, evento de clique

function update(event) {
    if (event.keyCode == 37 && direcao != "right") direcao = "left";
    if (event.keyCode == 65 && direcao != "right") direcao = "left";
    if (event.keyCode == 38 && direcao != "down") direcao = "up";
    if (event.keyCode == 87 && direcao != "down") direcao = "up";
    if (event.keyCode == 39 && direcao != "left") direcao = "right";
    if (event.keyCode == 68 && direcao != "left") direcao = "right";
    if (event.keyCode == 40 && direcao != "up") direcao = "down";
    if (event.keyCode == 83 && direcao != "up") direcao = "down";
}

function iniciarJogo() {

    if (snake[0].x > 15 * box && direcao == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direcao == "left") snake[0].x = 16 * box;

    if (snake[0].y > 15 * box && direcao == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direcao == "up") snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            game_over.play();
            clearInterval(jogo);
            alert('Game Over ):');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direcao == "right") snakeX += box;
    if (direcao == "left") snakeX -= box;

    if (direcao == "up") snakeY -= box;
    if (direcao == "down") snakeY += box;

    if (snakeX != comida.x || snakeY != comida.y) {
        snake.pop(); //retira o último elemento do array
    } else {
        comida.x = Math.floor(Math.random() * 15+1) * box,
        comida.y = Math.floor(Math.random() * 15+1) * box;
        engolindo.play();
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);