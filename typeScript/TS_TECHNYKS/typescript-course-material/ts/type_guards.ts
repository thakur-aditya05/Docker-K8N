// type guards  can be used in three ways ---
// typeof
// instanceof
// custom type guard fn

function printID(id: string | number) {
    if(typeof id === 'string') {
        console.log(`id is a string: ${id}`);
    } else {
        console.log(`id is a number: ${id}`);
    }
}

// lets use this 
printID("14561ycrew323r23r"); // this function will go and frint String 
printID(123); // this functions will print number




// 
class Dog1 {
    bark() {
        console.log('Woof!');
    }
}

class Cat1 {
    meow() {
        console.log('Meow!');
    }
}

function handlePet(pet: Dog1 | Cat1) {
    if(pet instanceof Dog1) {
        pet.bark();
    } else {
        pet.meow();
    }
}
let tommy=new Dog1();
handlePet(tommy);

let memo=new Cat1();
handlePet(memo);


// now using "as"

interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

// custome way of defineding the things 
function isString(value: any): value is string {
    return typeof value === 'string';
}

function checkType(value: string | number) {
    if(isString(value)) {  // if is string return true then ok print string
        console.log('value is string');
    } else {  // if it is number
        console.log('value is number');
    }
}

checkType(10);