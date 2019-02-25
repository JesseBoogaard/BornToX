const fs = require('fs');
const verbFile = fs.readFileSync('verbs.txt');
const verb = verbFile.toString().split('\n');

class BornToX {
    constructor() {
        let x;
        let y;
        this.x = x;
        this.y = y;
    }

    GenerateNew() {
        this.x = verb[Math.floor(Math.random() * verb.length)];
        this.y = verb[Math.floor(Math.random() * verb.length)];
        return new Promise((fulfill, reject) => {
            if (this.x.localeCompare(this.y)) {
                fulfill(`Born to ${this.x}, forced to ${this.y}`);
            } else {
                reject('You died.');
            }
        })
    }
}

module.exports = BornToX;