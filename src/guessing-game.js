class GuessingGame {
    constructor() {
        this.cur = 0
        this.guessNum = 0
    }
    setRange(min, max){
        this.min = min;
        this.max = max;
        this.guessNum = Math.ceil(max/2);
    }
    guess(){
        return this.guessNum
    }
    lower(){
        this.max = this.guessNum
        this.guessNum = Math.ceil((this.max+this.min)/2)
    }
    greater() {
        this.min = this.guessNum
        this.guessNum = Math.ceil((this.max + this.min) / 2)
    }
}

module.exports = GuessingGame;
