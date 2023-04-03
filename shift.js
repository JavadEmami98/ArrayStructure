const original = [1,2,3,4,5];
original; //[1,2,3,4,5]
original.shift();
original; // [2,3,4,5]
original.unshift(1);
original; // [1,2,3,4,5]

const unchanging = [1,2,3,4,5];
//shift
const [value,...rest] = unchanging; // [1,2,3,4,5];
value; //1
rest; // [2,3,4,5]; 