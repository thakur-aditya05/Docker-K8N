function addNumber(a:number, b:number):number{
    return a+b;
}
console.log(addNumber(1,2));

// function expression 
const divide = function(a:number,b:number):number{
    return a/b;
}
console.log(divide(4,2));


// arrow function 
const multiply=(a:number,b:number):number => {
    return a*b;
}
console.log(multiply(4,2));


// optional & default parameters
function greet(username:string,greeting?:string):string{
    return `${greeting ? greeting : "" } ${username}`; // ternary operator
}
console.log(greet('it is'))


// default
function greet1(username:string,greeting:string="hi"):string{
    return `${greeting ? greeting : "" } ${username}`; // ternary operator
}
console.log(greet1('adit', 'hey'));


// deafult 2 
function greet2(username:string,greeting?:string):string{
    return  greeting ? `${greeting} ${username}` :  ` 'hi' ,${username} ` ; // ternary operator
}
console.log(greet2('it is'))


// function rest i.e all all args get converted to array form ]
function sum(...numbers:number[]):number{
    return numbers.reduce((total,num)=>total+num , 0);
}
// way 2
function sum1(...numbers:number[]):number{
    return numbers.reduce((total,num)=>{
        return total+num;
    },0);
}

// function overloading 
function getLength(value:string):number;
function getLength(value:any[]):number;
function getLength(value:any):number{
    return value.length;
}

console.log(getLength('hello'));
console.log(getLength([1,2,3]));




// function greet type 
function greet12(greeting:string, ... names: string[] ): void{
    names.forEach((name)=>{
        console.log(`${greeting}, ${name}`);
    });
}
greet12('hello','aditya','singh','code with technyks','everyone');

// arrow function short form 
const multiplyOfEach=(a:number,b:number):number => a*b;
console.log(multiply(2,2));


// 




