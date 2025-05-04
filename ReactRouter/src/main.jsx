import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/USer/user'
import Github,{GithubInfoLoader} from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> },  // This makes "/" show Home
//       { path: 'about', element: <About /> }, 
//       { path: 'contact', element: <Contact /> }, // "/about"
//       { path: 'about', element: <About /> }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>} />  
      <Route
      loader = {GithubInfoLoader}
       path='github' 
       element={<Github/>} /> 
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
