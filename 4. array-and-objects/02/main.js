var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

var penguins = []
penguins.push(gunter,ramon,fred,)

console.log(penguins[0])

var secondPenguins = penguins[1]

console.log(penguins[2])

var myPenguin = {
	character:"Whiteblack",
	origin:"Whiteblack the Penguin Sees the World",
	author:"H. A. Rey and Margret Rey"
}
penguins.push(myPenguin)

console.log(penguins.length)

penguins[0].canFly = true

penguins[0].sayHello()

for(var i = 0; i<= (penguins.length-1); i++){
  penguins[i].numberOfFeet = 2;
}

for(var a = 0; a<=(penguins.length-2); a++){
  if(penguins[a].canFly == true){
    console.log(penguins[a].name + " can fly")
  }
}