import TestGame from './scripts/new/test_game.js';
import Game from './scripts/game.js'
// window.addEventListener('load', function() {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
    
// })


// const Game = require("./scripts/game.js");
// const TestGame = require("./scripts/new/test_game.js");


window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded");
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const game = new Game(ctx, canvas);
    const testGame = new TestGame(ctx, canvas);

    let btn = document.getElementById("restart");
    btn.addEventListener('click', () => {
        game.start();
    });

    let testBtn = document.getElementById("restartTest")
    testBtn.addEventListener('click', () => {
        testGame.start();
    })
});
