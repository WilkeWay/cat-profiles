class Cat {
    constructor(name, adjective, sound, friendly){
        this.name = name;
        this.adjective = adjective;
        this.sound = sound;
        this.friendly = friendly;
    }
        
    toggleFriendly(){
        this.friendly = !this.friendly;
    }
}

const spooky = new Cat('Spooky', 'black', 'hisss', false)
const columba = new Cat('Columba', 'large', 'merroowww', true)

console.log(spooky);
spooky.toggleFriendly();
console.log(spooky);

class SmallCat extends Cat {
    constructor(name, adjective, sound, friendly, isBaby){
        super(name, adjective, sound, friendly);
        this.isBaby = isBaby;
    }

    verifyBaby(){
        console.log(`Baby Status: ${this.isBaby}`);
    }
}

const spookyKitty = new SmallCat('Kitty', 'black', 'mew', true, true)

console.log(spookyKitty);
spookyKitty.verifyBaby();