const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 40,
  intellect: 93,
  strength: 60,
  charm: 30,
  weapon: "pipe",
  item: "flashlight",
};

console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "yes" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door. ${player.name} finds a black figure, the face is cloaked by a black mask. the a lioght shines bright from beghind the figure revealing a 10 foot muscular beast looking down at ${player.name}`);
 console.log(`${player.name} tries to run away. ${player.name} turns and runs for the road but get grabbed back immediatly, getting dragged into the light, then it goes dark. ${player.name} looks for another way out. `)
  let ans = READLINE.question("there are two ways, fight the beast, or run for the door. what will you do? ");
 
}else{
  player.intellect++;
  console.log(`${player.name} decides not to open the door. ${player.name} walks away to the road. while walking ${player.name} see's a figure in the distance. stainding in the middle of the road. ${player.name} is frozen in terror, standing there staring`) 
  console.log(`not able to move the figure starts to move getting closer, it was far away but ${player.name} was still standing there. the figure stops for a seccond, leaning over. it stands back up with something it its hands. all of the sudden it pulls a wire from a black object in its hands. ${player.name}`)
  console.log(`${plaer.name} reganing contole of thier body, they reialsie that the wire that they pulled was a wire to start a chainsaw. they hear the chain start to rummble and thrash agenst the inside of the chainsaw. ${plaer.name} remebers that they have a piope they pulled off the gate to enter the house.`)
  let fightOrRun = READLINE.question(`fight or run?`)
}


console.log("Thanks for playing!");
