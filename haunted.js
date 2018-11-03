const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 40,
  intellect: 93,
  strength: 60,
  charm: 0,
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
 console.log(`${player.name} tries to run away. ${player.name} turns and runs for the road but get grabbed back immediatly, getting dragged into the light, then it goes dark. ${player.name} looks for another way out. there are two ways, fight the beast, or run for the door. what will you do? `)

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
