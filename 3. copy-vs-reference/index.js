// Value of x, y, a, b

var x = 10; //10
var y = "abc"; //"abc"
var a = x; // 10
var b = y; //"abc"

// Value of x, y, a, b
var x = 10; // 10
var y = "abc"; //"abc"
var a = x;// 10
var b = y;// "abc"
a = 5;// 5
b = "def"; //"def"

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr; // 1
arr.push(2); // 2

// Value of obj
var obj = { name: "ryan" }; //"ryan"
obj = { surname: "florance" }; //"florance"

// What's the output.
var arr = ["Hi"]; // Hi
var arr2 = arr; // Hi
console.log(arr === arr2); // true

// What's the output.
var arr1 = ["Hi!"]; //Hi
var arr2 = ["Hi!"]; // Hi
console.log(arr1 === arr2); // false
console.log(arr == arr2); //false

//What's the output
console.log([10] === [10]); //true

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

// Guess the output
var oldArray = []; //empty array []
var object = {}; // empty object {}
object.newArray = oldArray; //empty array []
oldArray.push(10); // oldArray = [10]
console.log(object.newArray === oldArray); // true

// Guess the output
var a = 5; // 5
var b = a; // 5
a = 10; // 10 replaces 5
console.log(a); //10
console.log(b); //5

// What's the output?
var a = {}; //empty object
var b = a; //empty object assign in "b"
a.a = 1; // "a" key with value "1" is stored in object "a"
console.log(a); // a is 1
console.log(b); // a is 1

// What's the output.
var a = []; //empty array
var b = a; //empty array is assigned to "b"
a.push(1); //now array "a" got one value "1" having index "0"
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); // true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {};
for (let key in person) {
  clone[key] = person[key];
}