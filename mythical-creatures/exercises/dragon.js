class Dragon {
    constructor(name, rider, hungry = true) {
        this.name = name;
        this.rider = rider;
        this.hungry = hungry;
        this.eatCount = 0;
    }

    greet() {
        return `Hi, ${this.rider}!`
    }

    eat() {
        this.eatCount++;
        if (this.eatCount >= 3) this.hungry = false;
    }
}

module.exports = Dragon;


