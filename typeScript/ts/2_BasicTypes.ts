// run by
// ts-node index.ts 

// Basic types
let num: number = 1234_564_5646;

let num2: bigint = 1234435435554645664566636666456345655436n;

console.log('num: ', num);
console.log('num1: ', num1);

let character: string = 'Code with Technyks';


let isAvailable: boolean = true;
let isAvailable1 = true;

let numArray: number[] = [1, 2, 3, 4];

let charArray: string[] = ['a', 'b'];

let val: null = null;
let val1: undefined = undefined;

let obj = {
    name: 'Abc',
    age: 10
};

let obj1: { name: string, age: number } = {
    name: 'Abc',
    age: 10
};

let obj2: { name: string, age: number, phone?: number } = {
    name: 'Abc',
    age: 10,
};



obj = {...obj, phone:123456};

obj1 = {...obj1, phone:123456};

obj2 = { ...obj2, phone: 123456 }; // ✅ Now works fine

// tuples 
// coordinates 
let valArray:[number,string]=[1,'a'];


// any type datatape flexibilty
let numVal:any=1;
numVal='g';

function testAnyType(val:any):any{
    return val;
    // "noImplicitAny":true;
}
function testAnyType1(val){
    return val;
    // "noImplicitAny":false;
}

console.log(testAnyType(2))
console.log(testAnyType('g'))




// arrays 
let numArray1: number[] = [1, 2, 3, 4];
let charArray1: string[] = ['a', 'b'];
// tuples 
let arr: [number, string] = [1, 'Alice'];
let coordinates3D: [number, number, number] = [10, 20, 30]; // (x, y, z) axis

// localhost:4200?name=Technyks&phone=1234567890
let userData: [string, number] = ['Technyks', 1234567890];

// ✅ You must match the types and order.
// ❌ [number, string] ≠ [string, number]

// drawback in tuples 
let response: [string, number] = ['localhost', 8080];
response.push(0);
console.log(response);  //['localhost', 8080,0]




// enum
// pascale case
enum Color{
    // app_name="my_app_name",
    Red='red',
    green='green',
    blue='blue',
}

console.log(Color.blue);
console.log(Color.green);


let color:Color=Color.Red;
console.log(color)

// const small=1;
// const medium=2;
// const large=3;

// const size = medium;

enum Size{
    small =1,
    medium,
    large
}
const enum SizeWConst{
    small =1,
    medium,
    large
}

let medium:Size=Size.small;
console.log(medium);

// unknown type 
let notSure: unknown = 'a';

if (typeof notSure === 'number') {
    notSure.toFixed(2);
} else if (typeof notSure === 'string') {
    notSure.length;
}


// never 
function infiniteLoop(): never {
    while (true) {
        // do something endlessly
    }
}
// infiniteLoop();




function throwError(message:string):never{
    throw new Error(message);
}
// throwError("i am a error ");


// void type 
function logMessage(message:string):void{
    console.log(message);
    // noImplicitRun:true
    return undefined;
}


// type inferenace and type assertion 
let username ="aditya";
// userData=10; // will thorugh error 

// type assertion 
let someValue : any = "hello world";
let strLength : number = (someValue as string ).length;
console.log(strLength);

// union types 
let id:boolean |string|number;
id="abc";
id=101;
id=true;

function printId(id:string|number){
    console.log(`id: ${id}`); // 'id': + id
}
printId(123);
printId("abc");


// type narrowing 
function printIdFn(id:string | number){
    if(typeof id === 'string' ){
        console.log('id is a string: ', id.toUpperCase());
    }else{
        console.log(`id is a number : ${id}`);
    }
}
printIdFn(1);



// interFacing
interface Person{
    name:string,
    age:number,
    greet(message):void,
}
let person:Person={
    name:'acbs',
    age:20,
    greet(message){  // function
        console.log(`hi hello ${message}`);
    }
}

// way 2
interface Person1{
    name:string,
    age:number,
    greet:()=>void,  // property 
}
function greet(){
    console.log("hi");
}
let person1:Person1 = {
    name:'aditya',
    age:10,
    greet,
}
person1.greet();




// interface with function types 
interface MathOp{
    (a:number, b:number):number;
}
const add:MathOp=(x,y)=>x+y;
const sub:MathOp=(x,y)=>x-y;

console.log('add 2 numbers : ', add(1,2));
console.log('sub 2 numbers : ', sub(1,2));


// type alias 
type UserId=string;

let userId:UserId="abc";

type Person2={
    name:string;
    age:number;
}

let person2:Person2={
    name:"it",
    age:12,
}

console.log(person1.name);
type ID = string | number;
let userId1:ID='aditya';
let orderId:ID=1014



// interFace vs type alias
interface User{  // parent class 
    name:string,
    phone:number,
}
interface Customer extends User{  // kind of parenting 
    address:string;  
}
let myCustomer:Customer={
    name:'aditya',
    phone:956935311,
    address:"bara",
}  


type Vehical={
    make:string,
    model:string,
}

// & is used for interSction 
// /want to extends Car with Vihical  
type Car= Vehical & {
    isElectric:boolean,
}
let myCar:Car= {
    make: "tata",
    model:"tata Punch",
    isElectric:true,
}





// way 2 for interfacing 
interface User{
    country:string,
}
let canada:User={
    name:"aditya",
    phone:9569350311,
    country:"india",
}

// way 2 for 'type' 
// only oneWay for "type" format 





// type 
type MathOp1= (a:number,b:number)=>number;

let add2:MathOp1=(x,y)=>x+y;
let multi:MathOp1=(x,y)=>x*y;
console.log(add(2,2));
console.log(multi(2,2));


// better example 2
type Status = "active" | "inactive" | "pending" ;   // union type 

let userStatus:Status = "active"; 
let userStatus1:Status = "inactive"; 
let userStatus2:Status = "pending"; 


type Tree={
    value:string,
    children:Tree[];
}

let tree:Tree={
    value:'root',
    children:[
        {
            value:"child1",
            children:[] // recursion chalta hi jayega 
        }
    ]
}




// intersection types
let config:{server:string; port:number} & {secure:boolean; timeout:number}={
    server:'localhost',
    port:8080,
    secure:true,
    timeout:5000,
}
// optional value 
interface Student{
    name:string,
    scholarNumber?:number,
    rollNo:number,
}
let aditya:Student={
    name:"aditya",
    rollNo:100,
}

aditya.scholarNumber=2311401153;

