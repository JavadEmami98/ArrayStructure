const numbers = [10,-20,30,-40,50];

const allPositive = numbers.filter((v) => v > 0);
allPositive; // [10,30,50] 

const allNegative = numbers.filter((v) => v < 0);
allNegative; // [-20,-40 ]


const positiveUnder50 = numbers.filter((v) => v > 0).filter(()=> v < 50);
positiveUnder50; // [10, 30]

// Filter With Objects
const people = [{name: 'jay'},{name: 'asghar'}];

const jPeople = people.filter(({name}) => name.startsWith('j'))
jPeople; // [{name: 'jay'}]


// Slice

const numberss = [10 ,20 ,30 ,40 ,50];

const middleThree = numberss.filter((_, i) => i > 0 && i < 4);
middleThree; // [20,30,40] * Wrong Way


const easierMiddleThree = numberss.slice(1,4);
easierMiddleThree; // [20,30,40]

numberss.slice(); // Copy migire az hame
numberss.slice(1); // [20,30,40,50]
numberss.slice(-1); //  [50]
numberss.slice(-2); //  [40,50]