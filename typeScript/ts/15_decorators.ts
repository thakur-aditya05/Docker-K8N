// types of decortaors ;


function Logger(constructor:Function){
    console.log(`Logging creation of class : ${constructor.name}`);
}

@Logger  // It does not run every time you create a new object.
        // It runs once when the class is defined (during load/compilation time).
class People{
    constructor(public name:String){}
}

const p=new People("piya");
console.log(p);  // 1stly logger Fnx wwill be printed 



// method Decorators 
function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method called: ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}

class CalcOp {
    @LogMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

const calcOp = new CalcOp();
console.log(calcOp.add(5, 5));  // Logs "Method called: add" and prints 10




// accessor and property decorators 



function ReadOnly(target:any, propertykey: string){
    Object.defineProperty(target,propertykey,{
        writable:false
    });
}

class Cars{
    
    // @ReadOnly  // noUnusedParameter (commentout)  // ExperimentalDecorators: true (unComment this )
    // brand:string= "tesla"
    

    private _brand:string = "tesla";

    @ReadOnly
    get brand(){
        return this._brand;
    }

    set brand(value:string){
        this._brand=value;
    }

}
const myCar=new Cars();
myCar.brand="tata"; // cant be change the name beacuse only can have read only property
console.log(myCar.brand);






// paramtere decoraters 
function LogParameter(target:object, propertyKey: string, parameterIndex:number){
    console.log(`Parameter in method ${propertyKey} at index ${parameterIndex}`);

}
class UserParam{
    createUser(
        @LogParameter name:string,
        @LogParameter age:number
    ){
        console.log(`User: ${name} Age: ${age}`);
    }
}

const userParam = new UserParam();
userParam.createUser("diya",20)





// practise probleum 
/* 
create a method decorator that logs the time taken for the executions of a market 
*/

function LogExecutionTime(target:any, propertyKey: string, descriptor: PropertyDescriptor){
    
    const originalMethod = descriptor.value;
    descriptor.value = function (...args:any[]){
        
        const start = performance.now();
        const result = originalMethod.apply(this,args);
        const end= performance.now();
        console.log(`executions time for ${propertyKey}: ${end-start}ms`);
        

        return result;
    } 
}
class MathOps{

    @LogExecutionsTime
    multiply(a:number, b:number):number{
        return a*b;
    }
}

const mathOps= new MathOps();

console.log(mathOps.multiply(15,16));


// -----------------------------------------------


