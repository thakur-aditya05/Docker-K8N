




// accesing  
import { useState } from "react";




import {useDispatch} from "react-redux";



import {addTodo} from "../features/todo/todoSlice";



export default function AddForm(){

    // this state varible to observe changes in form components 
    const [task,setTask]=useState("");


    const dispatch=useDispatch();


        let taskfixing = (e)=>{
            setTask(e.target.value);
                
        }

    const submitHandler = (event) => {
        event.preventDefault(); // Correct method name
        // console.log(task);
        dispatch(addTodo(task));
        setTask(" ");
        
    };


    return(
        <>
        <p><i>Best Example of Redux & Redux-toolkit</i></p>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={taskfixing}/> &nbsp;
            <button > Add Task</button>
        </form>
        </>
    );
}


// affter submitting the form the object passes to the redux variable and which on pass to the respsetie dispatch triggered 
// jb bhi naya action trigger kr rahe ho do cheez clear homi chahhiye  // kon sa reducers function called hoga // kon se action pr reducer function called hoga 
// called dispacth function pass reducer funcion and in that reducerfunction pass the action and action usko reducers ke naam se pata chal jata hai but pass krna hai jo payload me save hoga jake 
//  jaise hi ek kaam ko trigger kiya wasie hi (yani wo state trigger kr di hmne ) wo kaam trigger hoke aajyega 



