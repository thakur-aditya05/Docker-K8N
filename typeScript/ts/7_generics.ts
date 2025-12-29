/*  
provide Kide of dynamic templates 

generic are the way to create component (function,classes or interfaces)
that works with different types without lossing type safety 



*/

function genericIdentity<T>(arg:T):T{
    return arg;
}
console.log(genericIdentity<number>(10));
console.log(genericIdentity<string>("hi"));
console.log(genericIdentity<boolean>(true));


// generic with interfaces
interface keyPair<T,U>{
    key:T;
    value:U;
}

let keyPairValue:keyPair<string,string>={
    key:"adit",
    value:"rank",
};


let keyPairValue1:keyPair<string,number>={
    key:"adit",
    value:10,
};

// generic Constraints
function getLength<T extends{length:number}>(item:T):number{
    return item.length;
}
console.log(getLength("hello")); // if length type is returnable then onlu it will return length of that else give error 
console.log(getLength("1345")); // if length type is returnable then onlu it will return length of that else give error 
console.log(getLength([1,2,3,4,5,6])); // if length type is returnable then onlu it will return length of that else give error 

// generaic classes
class Box<T>{
    content:T

    constructor(value:T){
    }

    getContent():T{
        return this.content;
    }

}

const numberBox=new Box(100);
console.log(numberBox.getContent());

const stringBox=new Box("hello");
console.log(stringBox.getContent());


class Stack<T>{
    private items:T[] =[];  // crating array of the elements 

    // the item 
    push(item:T):void{
        this.items.push(item);
    }

    // popping the items  
    pop():T|undefined{
        return this.items.pop();
    }   

    // getting the elements 
    getStack():T[]{
        return this.items;  // will gives arrays 
    }

}

const numberStack=new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getStack());


const stringStack=new Stack<string>();
stringStack.push("hi");
stringStack.push("hello");
console.log(stringStack.getStack());



