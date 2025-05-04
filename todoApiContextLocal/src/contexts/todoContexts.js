import { createContext, useContext } from "react";

export const  todoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Buy groceries',
            completed: false,
        }
    ],
    addTodo: (title) => {},
    toggleTodo: (id) => {},
    removeTodo: (id) => {},
    editTodo: (id, title) => {}

})

export  const useTodo = () =>{
    return useContext(todoContext)
 
}

export const TodoProvider = todoContext.Provider