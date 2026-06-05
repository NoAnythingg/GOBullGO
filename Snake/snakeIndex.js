const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("resetBtn");
const gameWidth = gameBoard.width;
<<<<<<< HEAD
const gameHeight = gameBoard.height;
=======
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
>>>>>>> 459d583a7941a7cc28ebae7c03106a802aa9c47a
