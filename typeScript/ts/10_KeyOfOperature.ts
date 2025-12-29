// keyof operator
interface Person12 {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person12; // issme bs keval keys of person will come 
let keys: PersonKeys = "name" ;




type PersonKeys2 = string | number| string;  // "name"|age|email
let PersonKeys3:PersonKeys2  = "name";
console.log(PersonKeys3)

