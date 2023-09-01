

//class hero
class hero {
    
    //hero atributes builder
    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType

    }

    //player attack types
    Atack() {
        if (this.heroType === 'Warro') {
            weapon = 'Blade';
        } else if (this.heroType === 'Mage') {
            weapon = 'Magic';
        } else if (this.heroType === 'Ninja') {
            weapon = 'Shuriken'
        } else if (this.heroType === 'Monk') {
            weapon = 'Martial Arts'
        }

        console.log(`The ${this.heroType},attacked using ${arm}`);
    }
// metod for discription weakeness
    weakeness() {

        if (this.heroType === 'Warro') {
            weak = 'Air Strike';
        } else if (this.heroType === 'Mage') {
            weak = 'Darkness';
        } else if (this.heroType === 'Ninja') {
            weak = 'Fire'
        } else if (this.heroType === 'Monk') {
            weak = 'Arrow'
        }

        console.log(`The weakness for ${this.heroType} is ${weak}`);

    }


}

//variable for discription players weapons
let weapon = 'Blade';
//variable discription weakeness
let weak = 'Air Strike'


//creating character
const sparta = new hero('Leonidas', 30, 'Wirro');
const sensei = new hero('Jack Chan', 50, 'Monk');
const jiraya = new hero('Senkai Sen', 40, 'Ninja');
const witcher = new hero('Geralt', 100, 'Mage');

// calling atack method
sparta.Atack();
sensei.Atack();
jiraya.Atack();
witcher.Atack();

//calling weakennes method
sparta.weakeness();
sensei.weakeness();
jiraya.weakeness();
witcher.weakeness();

