var outfit = {
    hat : "baseball cap",
    shirt : "rHawaiian shirt",
    pants : "blackcargo shorts",
    shoes : "canflip-flopsvas"
}
//////////////////////////////////
for(var penguin of penguins){
    penguin.outfit = outfit;
}
for(var penguin = 0; penguin <= (penguins.length-1);penguin++){
    penguins[penguin].outfit = outfit;
}
//////////////////////////////////////
var penguinHatType = outfit.hat

var penguinHatType = []
for(var a of penguins){
     penguinHatType.push(a.outfit);
}

/////////////////////////////////////////
 outfit.accessory = "pocket watch"

 for(var a of penguins){
     a.outfit.accessory = "pocket watch"
 }

 for(var a = 0; a<= penguins.length; a++){
     penguins[a[outfit.accessory = "pocket watch"]]
 }

 //////////////////////////////////////////////
 outfit.hat = "tall hat"

 for(var a of penguins){
     a.outfit.hat = "tall hat"
 }

 for(var a = 0; a<= penguins.length; a++){
     penguins[a[outfit.hat = "tall hat"]]
 }
 /////////////////////////////////////////////////
 for(var a of penguins){
    delete a.outfit.pants
 }

 for(var a = 0; a<= penguins.length-1; a++){
     delete penguins[a].outfit.pants
 }

/////////////////////////////////////////////////////
