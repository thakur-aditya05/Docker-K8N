class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet():string{
        return `hello my name is ${this.name} and i m ${this.age} yrs old`;
    }
}
const new_person=new Person("diya",19); // constructor calling 
console.log(new_person.age);
console.log(new_person.name);
console.log(new_person.greet());

// just the name is



// --------
/* 
access modifiers (public,private,protected)

public:Accessible from anywhere . this is the default if no modifiers is specified
private:Accessible within the class
protected:Accessible within the class and its subclasses 
*/
class Car1 {

    public make:string;
    private model:string;
    protected year:number;
    constructor( make:string,model:string,year:number,){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    getModel():string{
        return this.model;
    }
}
const c1=new Car1('tesla','model0',2016);
console.log(c1.getModel)
console.log(c1.make);




class Car2 {  //You can define and assign all in one step:
    constructor(
        private make: string,
        private model: string,
        private year: number
    ) {}

    public getModel(): string {
        return this.model;
    }
}


// inheritance 
// properties ko innherit krna 
class Animal{
    // name:string; // we dont specify 
    constructor(
        public name:string
    ){}

    makeSound():void{
        console.log('some generic sound ... ');
    }
}

class Dog extends Animal{  // child class
    constructor(name:string){
        super(name);
    }

    makeSound():void{
        console.log("woof ! woof! ");
    }
}

const dog=new Dog('puppy');
dog.makeSound();


// abstraction  

abstract class Shape{
    abstract getArea():number// abstract method, must be implemented bt sbclass 
    printArea():void{
        console.log(`this area is ${this.getArea()}`)
    }
}
class Rectangle extends Shape{

    constructor(private width:number,private height:number){
        super();
    }

    getArea(): number {
        return this.width*this.height;
    }
}
const react = new Rectangle(5,9);
react.printArea();




// setters and getters 
class Circle{
    private _radius:number;

    constructor(radius:number){
        this._radius=radius;
    }
    get radius():number{
        return this._radius;
    }
    set radius(value:number){
    if(value<=0){
        throw new Error('Radius must be positive')
    }
    this._radius=this.radius;
   }
}


const circle =new Circle(10);
console.log(circle.radius);
circle.radius=12;
console.log(circle.radius);