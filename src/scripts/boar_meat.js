

class BoarMeat {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.width = 16;
        this.height = 22;
        this.color = 'LightCoral';
        this.isCooked = false;
        this.calories = 1000;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }

    // do some animations like smoke or something to cook, them
    // change sprite or just color to look cooked.
    cook() {
        // later add the thing where you have to cook right amount of time
        // and it burns/srhinks/reduces calorie count of the meat.
        // if have time make the fliping meat mini game
        // cooking meat minigame: sizzling meat and some indicator that pops up
        // super fast like animal crossing fishing, you dont know how long and you 
        // have to react fast or you will burn the meat. flip ton of times not one
        // then it would be to little to even know if it was fun, lasts like a good 30
        // seconds and you dont lose calories and stuff during it.
        // all of these mini games could be played in an separate panel that is a canvas also
        // that is like your touch screen to use hands in the game. 
        console.log("cook ran") 
        setTimeout(this.switchToCooked.bind(this), 5000);
    }
    switchToCooked() {
        console.log("timeout ran")
        this.color = 'brown';
        this.isCooked = true; 
    }
}

module.exports = BoarMeat;