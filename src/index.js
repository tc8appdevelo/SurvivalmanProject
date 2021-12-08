const Game = require("./scripts/game.js")
const Player = require("./scripts/player.js");
const Boar = require("./scripts/boar.js");
const Spear = require("./scripts/spear.js");
const Water = require("./scripts/water.js");
const Fire = require("./scripts/fire.js");
const Tree = require("./scripts/tree.js");
const BoarMeat = require("./scripts/boar_meat.js");


window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded");

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    const game = new Game(ctx);
    game.start();
});