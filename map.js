const numbers = [10,20,30,40];

const numbersTimes10 = numbers.map(
    (v) => v * 10
)
numbersTimes10; // [100,200,300,400,500]

// Combine Filter and Map

const numbersWithNegatives = [-10,20,30,-40,-50]
const positiveBy10 = numbersWithNegatives.filter((v) => v > 0).map((v) => v * 10);
positiveBy10; // [200,300]
 

// Mapping Obj
const people = [{name: 'jay'},{name: 'asghar'}];

const fullname = people.map((p) => ({
    ...p,
    fullname: `${p.first} ${p.last}`
}));
fullname[1].first = 'karim';
fullname[1].address.city = 'canada';