const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Were you in every class today? ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("Why?");
	if(talkback == "I dont know" || talkback == "I don't care") {
		console.log("Well...don't you care about graduating?");
	}
}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go.");
}
else {
	console.log("Good.");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least.");
}

let learn = READLINE.question("Did you learn something interesrting in school today?");
if (learn == "yes"){
	console.log("thats great")
}else{ 
 	console.log("Were you paying attention in class? Why go to school if you're not gonna pay attention?")
}
console.log("Go to your room")




