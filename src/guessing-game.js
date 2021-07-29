class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.guessNumber;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNumber = Math.round((this.max + this.min) / 2);
    return this.guessNumber;
  }

  lower() {
    this.max = this.guessNumber;
  }

  greater() {
    this.min = this.guessNumber;
  }
}

module.exports = GuessingGame;
