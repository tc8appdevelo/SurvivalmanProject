export const states = {
  PLAYING: 0,
  TRANSITION_RIGHT: 1,
  
}

class State {
  constructor(state) {
    this.state = state;
  }
}

class Playing extends State {
  constructor(player) {
    super('PLAYING');
    this.player = player;
  }

  enter() {
    
  }

  handleInput() {

  }
}

class TransitionRight extends State {
  constructor(player) {
    super('TRANSITION_RIGHT');
    this.player = player;
  }

  enter() {
    
  }

  handleInput() {

  }

}