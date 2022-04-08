export const states = {
  // PLAYING: 0,
  STATIONARY_LEFT: 0,
  STATIONARY_RIGHT: 1,
  MOVING_LEFT: 2,
  MOVING_RIGHT: 3,
}

class State {
  constructor(state) {
    this.state = state;
  }
}

export class StationaryLeft extends State {
  constructor(player) {
    super('STATIONARY LEFT');
    this.player = player;
  }

  enter() {
    // this.player.frameY = 1;
    console.log("enter STATIONARY LEFT")
  }

  handleInput(input) {
    if (input === 'PRESS right') {
      // this.player.setState(states.STATIONARY_RIGHT);
      console.log("PRESS right");
    }
  }
}

export class StationaryRight extends State {
  constructor(player) {
    super('STATIONARY RIGHT');
    this.player = player;
  }

  enter() {
    // this.player.frameY = 0;
    console.log("enter stationary right")
  }

  handleInput(input) {
    if (input === 'PRESS left') {
      // this.player.setState(states.STATIONARY_RIGHT);
      console.log("PRESS left")
    }
  }
}









// class Playing extends State {
//   constructor(player) {
//     super('PLAYING');
//     this.player = player;
//   }

//   enter() {
//     this.player.frameY = 0;
//   }

//   handleInput(input) {
//     if (input === 'PRESS left') {
//       console.log("left arrow")
//       console.log(input)
//     }
//   }
// }

// class TransitionRight extends State {
//   constructor(player) {
//     super('TRANSITION_RIGHT');
//     this.player = player;
//   }

//   enter() {
    
//   }

//   handleInput() {

//   }

// }