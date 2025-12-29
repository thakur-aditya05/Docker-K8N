import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForms";
export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todos);

    const clickHandler = (id) => {
        console.log("hi", id)
        dispatch(deleteTodo(id));
    };
    // const markHandler = (id) => {
    //     console.log("hi", id)
    //     return dispatch(marksAsDone(id));
    // };

    return (
        <>
            <AddForm />
            <h2>Todo list App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        {/* <button onClick={() => markHandler(todo.id)} style={{ textDecoration: isDone === true ? "line-through" : "" }}>
                            Task Done
                        </button> */}
                        {/* <button onClick={()=>markHandler(todo.id)} style={(isDone===ture)?TextDecoration:"lineThrough":"";}>Task Done</button> */}
                    </li>
                ))}
            </ul>
        </>
    );
}