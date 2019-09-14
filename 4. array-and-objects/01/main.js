let favoriteFoods = ["apple","banana","mango"]
console.log(favoriteFoods[1])
var firstFavoriteFood = favoriteFoods[0]
firstFavoriteFood[3] = "pears" //firstFavoriteFood.length - 1 = "pears"
console.log(favoriteFoods.length)
console.log(favoriteFoods.splice((favoriteFoods.length - 1), 1 , "pineapple"))
var lastFavoriteFood = console.log(favoriteFoods[favoriteFoods.length - 1])
for(var i = 0; i< favoriteFoods.length; i++){
console.log(favoriteFoods[i])}