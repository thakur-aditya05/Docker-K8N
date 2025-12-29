


// factorial function 
function facto(num:number):number{
    if(num==0 || num==1) return 1;
    return facto(num-1);
}
console.log(facto(8));
// -------------------------------------



















// defines a function accebt object (name age email ) and returns a formatted string 
interface User{
    name:string,
    age:number,
    email:string,
    
}

function greeting(obj:User):string{
    return `${obj.name} is of ${obj.age} having email id ${obj.email}`;
}

const user:User={
    name:"Adit",
    age:20,
    email:"thakuradityasingh22@gmail.com",
}
console.log(greeting(user));
// -------------------------------------





















// total prices wap a ts function calculate the prices of  an array of product object and each product hac prices and quantty 

interface Product{
    price:number,
    quantity:number,
}


function totalPrice(product:Product[]):number{
    let totalMoney=0;
    for(let el of product){
        totalMoney=totalMoney+el.price;
    }
    return  totalMoney;
}
let cart:Product[]={
    // {},{},{} 
}
// -------------------------------------

// define a vehical that can either be a car or bike with differents properties 
// waf t log deatils based on the vehicals type 





type CarData={
    type:'car',
    make:string,
    model:string,
    year:number,
}

type Bike={
    type:'bike',
    brand:string,
    cc:number,
}


type VehicalData = CarData | Bike ;

function getVehicalDetails(vehicle:VehicalData){
    if(vehicle.type==='car'){
        console.log(`Car:${vehicle.make} ${vehicle.model} Years: ${vehicle.year}`);
    }else{
        console.log(`Bike: ${vehicle.brand}, CC${vehicle.cc}`);
    }
}
let myCarDetails:VehicalData = {
    type:'car',
    make:'tesla',
    model:'model 10 ',
    year:2024,
};
let myBike:VehicalData = {
    type:'bike',
    brand:'bmw',
    cc:150
};
// -------------------------------------
















