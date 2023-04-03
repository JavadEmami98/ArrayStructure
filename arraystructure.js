//good
const arrayOfNumbers = [];
for (let value = 10; value <= 50; value += 10) {
    arrayOfNumbers.push(value);
}

// bad
for (let index = 0; index < arrayOfNumbers.length; index++) {
    console.log(arrayOfNumbers[index]); 
}

// for (in) loop
const numbers=[10,20,30,40,50];

for(const index in numbers) {
    console.log(index) // 0,1,2,3,4
    console.log(numbers[index]) // 10,20,30,40,50
}

//for (of) loop
for (const value of numbers) {
    console.log(value); //10,20,30,40,50
}

// for Each loop 

//const numbers=[10,20,30,40,50]; for each 2 ta meghdar migire value va index
numbers.forEach((value,index) => {
    console.log(value); // 10,20,30,40,50
    console.log(index); // 1,2,3,4,5
});


// Copy 
//const numbers = [10,20,30,40,50];
numbers; // [10,20,30,40,50]
const copyOfNumbers = [...numbers];
copyOfNumbers; //[10,20,30,40,50]
copyOfNumbers[0] = 100; // replace first index with 100
copyOfNumbers; //[100,20,30,40,50]

// Copy arrays
const people = [{name : "jay"},{name : "karim"}];
const copyOfPeople = [...people];
copyOfPeople; // [{name : "jay"},{name : "karim"}]
copyOfPeople[0].name = "seri7";
copyOfPeople; // [{name : "seri7"},{name : "karim"}]


// Finding Index

const names = ["jay","karim","seri7","asghar","benz"];

console.log(names.indexOf("jay")); // 0
console.log(names.indexOf("seri7")); // 2
console.log(names.indexOf("karim", 1)); // 1, undefind , karim dge nist tou list

console.log(names.lastindexOf("benz")); // 4

console.log(names.findIndex((name)=> name === "seri7")); // 2 true

// Finding Objects

//const names = ["jay","karim","seri7","asghar","benz"];

console.log(names.find((value)=> value === "seri7")); // seri7

// Some , Includes , Every
const num = [10, -20, 30, -40, 50];

console.log(num.includes(10)); // true

console.log(num.some((num)=> (num > 0))); // ture bazia are hastn 
console.log(num.every((num)=> (num > 0))); // false 
