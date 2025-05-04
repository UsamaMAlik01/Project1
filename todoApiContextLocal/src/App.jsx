import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm,TodoItems } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) =>{
    if (!title) return
    setTodos((prev)=>[...prev,{id: Date.now(),...title}])
  }
  const editTodo = (id, title) =>{
    if (!title) return
    setTodos((prev)=> prev.map((prevTodo)=> id===prevTodo.id ? title:prevTodo))
  }
   const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
   }

   const toggleTodo = (id) =>{
    setTodos((prev)=>prev.map(eachTodo => eachTodo.id === id ? {...eachTodo, completed: !eachTodo.completed} : eachTodo))
   }

   useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(Array.isArray(storedTodos) ? storedTodos : []);
    } catch (error) {
      console.error('Failed to parse todos:', error);
      setTodos([]);
    }
  }, []);
  
  

   useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
   },[todos]) 

  return (
    <TodoProvider value={{todos, addTodo, toggleTodo,removeTodo, editTodo }}>
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
