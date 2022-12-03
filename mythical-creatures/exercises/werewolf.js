class Werewolf {
    constructor(name) {
        this.name = name;
        this.form = 'human';
        this.hungry = false;
        this.alive = true;
    }

    completeTransformation() {
        this.form = this.form === 'wolf' ? 'human' : 'wolf';
        if (this.form === 'wolf') {
            this.hungry = true;
        } else {
            this.hungry = false;
        }
        return this.form === 'wolf' ? 'Aaa-Woooo!' : 'Where are I?';
    }

    eatVictim(victim) {
        if (this.form === 'human') return `No way am I eating Baby, I'd like a burger!`;

        if (this.hungry) {
            victim.alive = false;
            this.form = 'human';
            return 'Yum, Hannah was delicious.';
        }
    }
}

module.exports = Werewolf;