class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.less = min;
        this.more = max;
    }

    guess() {
        return this.average=Math.round((this.less+this.more)/2)
    }

    lower() {
        this.more=this.average
    }
 
    greater() {
        this.less=this.average
    }
}

module.exports = GuessingGame;
