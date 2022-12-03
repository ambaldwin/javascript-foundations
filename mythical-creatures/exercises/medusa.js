var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        let statue = new Statue(victim.name)
        this.statues.push(statue);

        if (this.statues.length === 4) {
            let freed = this.statues.shift();
            return new Person(freed.name, 'relieved');
        }
    }
}

module.exports = Medusa;
