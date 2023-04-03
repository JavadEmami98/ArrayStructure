const numbers = [10,20,30,40,50];

Array.from(numbers); // [10,20,30,40,50] 
Array.from(numbers, (v) => v * 10); // [100,200,300,400,500] 


// flat : hame ro tou ye khat neshoon mide
// agr array ha kheily tou dar tou boudn flat(1) ya flat(2) ya flat(infinity) ke hame ro tou ye saf neshoon mide

const numberss = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
];

numberss.flat(); // [ 10,20,30,40,50,60,70,80,90 ]

// flat Map
const values = [10,20,30,40,50];

values.map((v, i)=> [v,i]); // [[10,0],[20,1],[30,1],[40,2],[50,3]]
values.flatMap((v,i)=> [v,i]); // [10,0,20,1,30,1,40,2,50,3] 

// Contact
const first = [10,20];
const second = [30,40,50];

first.concat(second); // [10,20,30,40,50]

first.concat(second.map(v => v * 10)); // [100,200,300,400,500]

