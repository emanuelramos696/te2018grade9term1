function character(name){

this.name = name;
this.omegaLevel = false;
this.haircolor;
this.power;
this.mutant = true;
this.getInfo = getCharacter;
}

function getCharacter(){

return this.name +" " + this.omegaLevel + " " + this.haircolor + " " + this.power + " " + this.mutant;

}

var jean = new character("Jean Grey");
jean.omegaLevel = true;
jean.haircolor = "orange";
jean.power = "telekinetic";
jean.mutant = true;

console.log(jean.getInfo());

let person = {
	firstName:"jane",
	gender: "female",
	age: 25,
	eyeColor: "blue"}

console.log(person.firstName + person.age + person.gender + person.eyeColor);