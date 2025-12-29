/*
    Write a BankAccount class with the following properties:
    accountNumber: string
    balance: number (private)

    The class should have these methods:

    deposit(amount: number): void (to add to balance)
    withdraw(amount: number): void (to subtract from balance)
    getBalance(): number (to return current balance)
*/


class BankAccount{
    private balance:number;

    constructor(public accountNumber:string, initialBalance:number){
        this.balance=initialBalance;
    }

    deposite(amount:number):void{
        this.balance+=amount; // this.balance=this.balance+amount
    }

    withdraw(amount:number):void{
        if(amount>this.balance){
            throw new Error('insufficient balance');
        }
        this.balance-=amount;
    }

    getBalance():void{
      `${this.balance}`;
    }



}

const myAccount = new BankAccount('4a35d4g7q1w7w838e4',4000); 
myAccount.withdraw(200);
myAccount.withdraw(200);
myAccount.withdraw(200);
myAccount.withdraw(200);
myAccount.deposite(1000);
myAccount.getBalance() 






/* 



*/

class Employee{


    constructor(
        public name:string,
        public salary:number,
    ){};

    getDetails():string{
        return `employee:${this.name}, salary : ${this.salary} `;
    }



}

class Manager extends Employee{

    public department:string;

    constructor(name:string, salary:number,department:string){
        super(name,salary) ; // calling the parent class 
        this.department=department;
    }

    getDetails():string{
        return `Manager:${this.name}, salary : ${this.salary}, Department:${this.department} `;
    }



}

const emp=new Employee('aditya',5000);
const mgr=new Manager('aditya',5000,'IT');

console.log(emp.getDetails());
console.log(mgr.getDetails());

