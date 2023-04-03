// Push: add and Pop: dlt
const original = [1,2,3,4,5];

original; //  [1,2,3,4,5]
original.pop(); // 5
original; // [1,2,3,4]
original.push(5);
original; //  [1,2,3,4,5]

let aNumber = 5;
const stateManagerCopy = aNumber;
stateManagerCopy === aNumber; // true
aNumber = 6;
stateManagerCopy === aNumber; // false 