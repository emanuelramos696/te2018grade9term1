
const READLINE = require("readline-sync");
let dog = {
	name: "old yeller",
	numLegs: 4,
	color: "yeller",
	breed: "golden retriever",
	bark: function(){
	    console.log ("bark!");
	},
    sayName: function(){
    	console.log (`My name is ${this.name}!`);
    },
    
    eat: function (food){
  if (food == "chicken"){
     console.log("tasty");
 
  }else{
     console.log(`pass! ${this.name} dosen't eat ${food}s!`)
    }

} 

dog.sayName();
