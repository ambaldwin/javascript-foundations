class Unicorn {
  constructor(name, color, words) {
    this.name = name;
    this.color = color ? color : 'white';
  }

  isWhite(color) {
    return Boolean(color === 'white');
  }

  says(words) {
    return `**;* ${words} *;**`;
  }


}

module.exports = Unicorn;
