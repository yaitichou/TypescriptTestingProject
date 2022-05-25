"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("node:readline");
const process_1 = require("process");
//------------------ Specialization Class --------------------------------------------------------
class Specialization {
    constructor() {
        this.mastery = 0;
        this.spells = [];
    }
    _getMastery() {
        return this.mastery;
    }
    _getSpells() {
        return this.spells;
    }
}
//------------------ Sorcerer Class - Specialization SubClass --------------------------------------------------------
class Sorcerer extends Specialization {
    constructor(mastery) {
        super();
        this.mastery = mastery;
        this.mana = this.mastery * 10 + 100;
        this.magic = this.mastery * 5 + 5;
        this.spells = ['ThunderBolt', 'Curse'];
    }
}
//------------------ Warrior Class - Specialization SubClass --------------------------------------------------------
class Warrior extends Specialization {
    constructor(mastery) {
        super();
        this.mastery = mastery;
        this.endurance = this.mastery * 10 + 100;
        this.strength = this.mastery * 5 + 5;
        this.spells = ['Knockout', 'Berserk'];
    }
}
//------------------ Character Class--------------------------------------------------------
class Character {
    constructor(name, age, specs, gender, mastery) {
        switch (specs) {
            case "sorcerer":
                this.specialization = new Sorcerer(mastery);
                break;
            case "warrior":
                this.specialization = new Warrior(mastery);
                break;
        }
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.specs = specs;
    }
    ;
    displayCharacter() {
        const charactInfos = {
            name: this.name,
            age: this.age,
            gender: this.gender,
            specialization: this.specs,
            mastery: this.specialization._getMastery(),
            spells: this.specialization._getSpells(),
        };
        console.log(charactInfos);
    }
}
//------------------ Executed Code--------------------------------------------------------
const rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout,
});
let newCharacter;
let chosen = false;
rl.question("What Kind of character do you want to use ? (enter sorcerer or warrior)\n", function (answer) {
    switch (answer) {
        // Choose between two characters (a sorcerer or a warrior)
        case "warrior":
            newCharacter = new Character("Filibor", 25, answer, 'M', 12);
            console.log("Congrats ! You will play as Filibor the warrior.");
            chosen = true;
            break;
        case "sorcerer":
            newCharacter = new Character("Filibor", 25, answer, 'M', 12);
            console.log("Congrats ! You will play as Filibor the sorcerer.");
            chosen = true;
            break;
    }
    if (!chosen) {
        console.log("You entered the wrong specialization !");
    }
    else {
        newCharacter.displayCharacter();
    }
    return;
});
//# sourceMappingURL=test.js.map