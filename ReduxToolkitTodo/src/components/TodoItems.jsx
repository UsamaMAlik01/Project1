import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/Todo/todoSlice"

function TodoItems() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()

    return (
        <>
        <div>Todos</div>
        {todos.map((todo)=>{
            return (
                <li key= {todo.id}>
                    {todo.title}
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
                </li>
            ) 
        })}
        </>
        
    )
}

export default TodoItems
