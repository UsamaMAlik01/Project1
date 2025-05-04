import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'


function App() {
  const [loading, setLoading] = useState(true)
  const Dispatch = useDispatch()

  useEffect(() => {
    try {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            Dispatch(login({ userData }))
          } else {
            Dispatch(logout())
          }
        })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])


 return !loading ? (
   <div className='bg-gray-400 flex flex-wrap min-h-screen'>
     {/* Add your JSX content here */}
     <h1>Welcome to Mega Blog</h1>
     <div className='w-full block' >
      <Header/>
      {/* </Outlet> */}
      <Footer/>
     </div>
   </div>
 ): null
}

export default App
