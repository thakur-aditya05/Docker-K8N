
// synch programming 
// running one by one line of code 
// 
function task1(){
    
}
function task2(){

}

task1();
task2();


// async programming 

function task12() {
  setTimeout(() => {
    console.log("task12");
  }, 1000);
}

function task22() {
  console.log("task22");
}

task12();
task22();

// async programming ko synchronous way me use kr skte hai 








// promises 
// to create promises we do this 
const fetchData = (value:boolean):Promise<string>=>{
    return new Promise((resolve,reject)=>{   // new promises takes a call back this callback have two argument one is successFull and reject and juts 
        if(value){
            setTimeout(()=>{
                resolve('data fetched successFull');
            },2000);
        }else{
            reject('error found in fetching');
        }
    });
}


// this is uses 
fetchData(true)
.then((data)=>{
    console.log(`success: ${data}`);
}).catch((e)=>{
    console.log(`failure : ${e} `);
});


fetchData(false)
.then((data)=>{
    console.log(`success: ${data}`);
}).catch((e)=>{
    console.log(`failure : ${e} `);
});


// chaining of the promises


// promises hell 
fetchData(false)
    .then((data)=>{
        console.log(`success 1 : ${data}`)
        fetchData(true)
        .then((data)=>{
            console.log(`success 2: ${data}`)
            fetchData(true)
            .then((data)=>{
                console.log(`success  3: ${data}`);
            })
            .catch((e)=>{
                console.log(`failure 3: ${e}`)
            })
        })
        .catch((e)=>{
            console.log(`failure 2: ${e}`)
        })
    })
    .catch((e)=>{
        console.log(`failure 1:${e}`);
    })

// this is sort and promises sort 
fetchData(true)
  .then((data) => {
    console.log("success: ", data);
    return "get more data"; // chaining promises
  })
  .then((moreData) => { // chaining promises
    console.log("more data: ", moreData);
  })
  .catch((error) => {
    console.log("failure: ", error);
  });



// async await 
async function fetchDataNew(): Promise<string>{
    return 'data fetched'
}

fetchDataNew()
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    });

async function getData():Promise<void>{

    // conversion  of asynch function to synch function
    const  data1=await fetchDataNew() // this will return the promises  // then and catch method can be applied on data 
    console.log(data1);
    const  data2=await fetchDataNew() // this will return the promises 
    console.log(data2);

    // this function will return undefined by deafult but 
    // throw Error("this message will be catched by catch ");
    // return "this is success message will be go to success callback " 

}

// as we have then and catch pairs in fetchData similarly we have try and cathc pair to use 
// to handle async- await error 




async function getData1():Promise<void>{

    try{
        // conversion  of asynch function to synch function
        const  data1=await fetchDataNew()  
        console.log(data1);
        const  data2=await fetchDataNew() 
        console.log(data2);

    }catch(e){
        console.log(`success message ${e}`);
    }

}

// 



