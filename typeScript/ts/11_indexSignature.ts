// index Signature









// index signature
/*
An index signature in TypeScript is used to define types for objects 
that can have properties of dynamic keys, where the keys are not 
known in advance but you still want to enforce the type of the values. 
Index signatures are particularly useful when working with objects 
that act like dictionaries or maps.
*/

interface StringArray {
    [index: number]: string;  // array of string and having numbered index 
}

let array1: StringArray = ['Code', 'with', 'Technyks'];
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[3]);











interface StringArray1 {
    [index: string]: string;
}
let myStrings: StringArray1 = {
    "0": "Hello",
    "1": "World",
    "name": "TypeScript",
    "lang": "TS"
};

console.log(myStrings["0"]);     // Hello
console.log(myStrings["name"]);  // TypeScript











interface Fruit {
    [key: string]: string;
}

const fruitsArray: Fruit = {
    apple: 'A fruit',
    banana: 'A yellow fruit',
};


console.log(fruitsArray["apple"]);
console.log(fruitsArray["banana"]);





















