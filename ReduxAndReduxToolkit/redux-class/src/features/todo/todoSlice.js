
// reducres and store bundle will be created 
import {createSlice,nanoid} from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit'


// 2nd step 
const initialState={
    todos:[{id:"abc", task:"demo-task",isDone:false}],
};


// we are creating reducers 
// step 3
export const todoSlice=createSlice({
    name:"todo",  // app name
    initialState,  // object of state variable intial state 
    // we have three action addToDO, deleteToDO, marksAsDone Todo
    // reducres are kind of event handler that do somthing affter any specific event 
    // object of the function 
    reducers:{
        // 1st funtiontion (stateVariable(todos), action(Imagine object{type,payload}))
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false,
            };
            // we are pushing newTodo extracted from actionObject to the newTodo

            state.todos.push(newTodo); // we are directly pushing new values to state  variable  this power is geven by redux only(yaad hai setstate variable me push krte the changed values push krte the but yaha pe stateVarible todos me hi ek value passs kr rahe hai  )  // direct mutation
        },

        // 3rd step 2nd 
        deleteTodo:(state,action)=>{
            //  the id is comming from  line"36"  
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload ); //action.payload will cuntain id 
        },
        // 3rd sttep 3rd function 
        marksAsDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
            });
        },
    },
});

// 5th step // action 
export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions  // Action creators are generated for each case reducer function // jo upper action as the args pass on ho raha hai wo yahi hai 

// 4th step 
export default todoSlice.reducer;  // we are exporting to other files 

