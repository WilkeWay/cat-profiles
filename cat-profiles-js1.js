function Profile(name, adjective, sound) {
    this.name = name;
    this.adjective = adjective;
    this.sound = sound;
    
    this.summarise = function(){
        console.log(`This cat is named ${name}. They are ${adjective}. When you pet them, they go ${sound}!`);
    }
}

const spookyCat = new Profile('Spooky', 'black', 'hissss');
const columbaCat = new Profile('Columba', 'big', 'merowww');

spookyCat.summarise();
columbaCat.summarise();