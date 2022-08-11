class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.gnum = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.gnum;
        this.guess();
    }

    greater() {
        this.min = this.gnum;
        this.guess();
    }
}

module.exports = GuessingGame;