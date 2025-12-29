// literal types 






// strings litrals 
type orderStatus1="delivered" | "pending" |  "cancelled" ;
let order : orderStatus1="pending";


// 
let  answer:"tes"|"no";
answer="no";

// number literals
let count:0|1|2;
count = 0;




// boolean literals 
let isVisible:true | false;
isVisible= true;

// 
type LiteralsType="hello" | 2| "hi"|{name:string , age:number};


// 
type Actions = "add" | "update" | "delete";

// above tuple can be used to defined aour data types 
function takeAction(action: Actions) {
    switch(action) {
        case 'add': 
            console.log('add function');
            break;
        case 'update':
            console.log('update function');
            break;
        case 'delete': 
            console.log('delete function');
            break;
        default: 
            console.log('none');
            break;
    }
}
// literals in function 
// only few msg can be passed 
function printStatus(status: 'success' | 'error' | 'loading'): void {
    console.log(`Current state is ${status}`);
}

// only success errr loading can be passed
printStatus('success');
// printStatus('completed');


// letrals using interface 
interface ButtonConfig {
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'green' | 'blue';
}
// lets defined our own btn type 
const btn: ButtonConfig = {
    size: 'medium',
    color: 'green',
};














