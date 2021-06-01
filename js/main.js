let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = "right";

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

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direcao == "right") snakeX = box + snakeX;
    if (direcao == "left") snakeX = box - snakeX;

    if (direcao == "up") snakeY = box - snakeY;
    if (direcao == "down") snakeY = box + snakeY;

    snake.pop(); //retira o último elemento do array

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);