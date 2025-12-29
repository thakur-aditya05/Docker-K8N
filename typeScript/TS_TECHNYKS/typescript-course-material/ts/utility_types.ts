// utlity types

interface UserRecord {
    name: string;
    age: number;
    email: string;
}
// partial a type of utility 
// affter using partial all the feild become options that at a time u can give either name age email 
const updateUser = (user: Partial<UserRecord>) => {
    console.log(user);
};

updateUser({ name: 'Diya' });
updateUser({ email: 'diya@gmail.com' });





type User12 = Partial<UserRecord>;

let user123: User12 = {
    name: 'Diya'
};











// Required
// alll the feild become required 

type User123 = Required<UserRecord>;

let user1234: User123 = {
    name: 'Diya',
    age: 10,
    email: 'diya@gmail.com'
};

user1234.age = 19;











// Readonly
// redeclare is not available in this Readoonly type 
type UserRecord2 = Readonly<UserRecord>;

let usr: UserRecord2 = {
    name: 'Diya',
    age: 10,
    email: 'diya@gmail.com'
};

// usr.age = 19;















// Pick
// eitheer name only , email only or age only or any pair of two out of three  , or all three basically subsets deta hai 
type UserInfo = Pick<UserRecord, 'name' | 'email'>;

const userInfo: UserInfo = {
    name: 'Diya',
    email: 'diya@gmail.com',
    // age: 10
}












// Omit
// u cant give one set og thingss else u can give any things 


type UserWithoutEmail = Omit<UserRecord, 'email'>;  // u cant give emails 




const userOmitInfo: UserWithoutEmail = {
    name: 'Diya',
    // email: 'diya@gmail.com', // if i will assign this will give error 
    age: 10,
}









// Record

type UserRecordInfo = Record<string, number>; // key should be string and   value should be number 

const userRecordInfo: UserRecordInfo = {
    name: 2,
    email: 23,
    age: 10
};



// Role will be of key type 
type Role = 'admin' | 'user' | 'guest';

const userRoles: Record<Role, string> = {
    admin: 'Diya',  // all three will be complasary 
    user: 'Prem',
    guest: 'Sujal'
};

console.log(userRoles.admin);






// Exclude


type Stat = 'success' | 'error' | 'loading';

type ExcludeError = Exclude<Stat, 'error'>;  // error will be excluded and cant be used of all time 
const stat1: ExcludeError = 'success';
const stat2: ExcludeError = 'loading';   // 






// Extract
type ExtractError = Extract<Stat, 'error' | 'loading'>;

const statE: ExtractError = 'error';  // only error and loading can be passed 






// NonNullable

type MayBeUser = string | null | undefined;
type UserNull = NonNullable<MayBeUser>;

const userNull: UserNull = 'Diya';  // null and undefined nahi de skte hai // it will show error 










// ReturnType
function getType() {
    return { name: 'Diya', age: 19 };
}

type UserReturnType = ReturnType<typeof getType>;  // we can only pass age and name  and nothing else 

const userType: UserReturnType = { name: 'Alice', age: 30 };










// Parameters
function updateUserData(name: string, age: number) {
    console.log(`${name}, ${age}`);  // just printing and nothing else 
} 

type UpdateUserParams = Parameters<typeof updateUserData>;  // function parameter will return this i,e name and age  

const params: UpdateUserParams = ['Diya', 20]; 




// return and parameter are of same type but return will demand for object type and parameter will demand for 
// and parameter will demand for directly key and age as number 







// ContructorParameters

class UserCData {
    constructor(public name: string, public age: number) {}
}

type UserContructorParams = ConstructorParameters<typeof UserCData>;

const userCParams: UserContructorParams = ['Diya', 20];   // class constructor type hi lega keval 
