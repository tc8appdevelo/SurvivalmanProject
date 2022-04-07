const Game = require("./scripts/game.js");
const TestGame = require("./scripts/new/test_game.js");


window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded");
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    this.game = new Game(ctx, canvas);
    this.TestGame = new TestGame(ctx, canvas);

    let btn = document.getElementById("restart");
    btn.addEventListener('click', () => {
        this.game.start();
    });

    let testBtn = document.getElementById("restartTest")
    testBtn.addEventListener('click', () => {
        this.TestGame.start();
    })
});
