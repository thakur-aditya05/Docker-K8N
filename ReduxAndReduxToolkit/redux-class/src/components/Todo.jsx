// https://redux-toolkit.js.org/tutorials/quick-start 




// this hooks allows you to access store variable (stateVariable vari of central lib) pprovided by providerComponents to this components 
import { useSelector } from "react-redux";



import { useDispatch } from "react-redux";



// accessing dlete and ,marksasDone function 
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";


// access form from 
import AddForm from "./AddForms";

export default function Todo() {

    // from store accessing state variable which is an object in and having stateVarible called todo 
    // yani bs state Varibles access krne ke liye useSelector use kr rahe hai 
    const todos = useSelector((state) => state.todos);

    // 
    const dispatch = useDispatch();
    console.log(todos);

    
    // we need ki clck krne pe dispacth action called ho aur ussme id pased ho ajye 
    const clickHandler = (id) => {
        // console.log("hi", id)
        dispatch(deleteTodo(id));
    };
    const markHandler = (id) => {
        console.log("hi", id)
        dispatch(marksAsDone(id));
    };

    return (
        <>
            <AddForm />
            <hr />
            <h2>Todo list App</h2>
            
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}
                    {/* clickhandler call hoga with id as the handler  */}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => markHandler(todo.id)} style={{ textDecoration: todo.isDone ? "line-through" : "none" }}> Task Done </button>
                    </li>
                ))}
            </ul>
        </>
    );
}






