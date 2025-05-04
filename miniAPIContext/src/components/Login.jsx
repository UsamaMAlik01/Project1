import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})}

    return(

        <div>
             <br />
             <input
             value={username}
             onChange={(e) => setUsername(e.target.value)} 
            type="text"
             placeholder='Username' />
            <br/>
            <input 
            value={password}
             onChange={(e) => setPassword(e.target.value)}
            type="password"
             placeholder='Password' />
             <br />
            <button onClick={HandleSubmit}>Submit </button>
            <br />
        </div>
    )
}

export default Login
