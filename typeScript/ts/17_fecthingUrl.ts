


// working with api fetch 

interface Post{
    userId:string,
    id:number,
    title:string,
    body:string
}



async function fetchPost():Promise<Post[]>{
    try{
        const response = await fetch('')  // this give json object  data from api 
        const posts:Post[]= await response.json();
        console.log(posts);
        return posts;
    }catch(e:any){
        console.log(e);
        throw new Error(e);
        // throw (e);
    }
}
fetchPost()
    .then((data)=>{
        console.log("posts: ",data);
    })
    .catch((e)=>{
        console.log(e);
    })








// conCurrent promises with Promises.all

async function  task1(){
    console.log("task  1");
    return "tsk1";
}

async function  task2(){
    console.log("task  2");
    return "tsk2";
}

async function fthData(): Promise<[string,string]>{
    const [data1,data2] = await Promise.all([task1(),task2()]);  // returnning the array  having 

    return  [data1,data2];  // this will be json format data 

}

fthData()
    .then((data)=>{
        console.log(data);
    })
    .catch((e)=>{
        console.log(e);
    });






// one magic to showu 
// /i have this 




class Student{
    private roll:number;
    strLength:number|undefined;  // ha thik hai koi dikkat nahi hai abhi nahi baad me define kr lenge 
    strLength1!:number;  // ha thik hai koi dikkat nahi hai abhi nahi baad me define kr lenge 

    constructor(roll:number){
        this.roll=roll

    }
    set rollNo(roll:number){
        this.roll=roll;
        this.strLength=10;
    }

}


const st = new Student(10);
console.log(st!.strLength1);
console.log(st!.strLength); // not null assertions 
