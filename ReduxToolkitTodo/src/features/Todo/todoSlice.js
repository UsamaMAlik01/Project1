import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id: nanoid(),
        title: "First Todo",
        completed: false
    }]

}

export const todoSlice = createSlice({
    name: 'todo',
    inintialState: initialState,
    reducers:{
        addTodo: (state, action) => {
           const todo = {
            id: nanoid(),
            title: action.payload.title,
            completed: false
           }
           state.todos.push(todo)
           
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo=> todo.id!== action.payload.id)
           


        },
        updateTodo:(state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, title: action.payload.title}:todo)

        },
        toggleTodo:(state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, completed:!todo.completed}:todo)

        } 

    }
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer;