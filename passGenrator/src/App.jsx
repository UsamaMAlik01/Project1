import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [sepallow, setsepallow] = useState(false)
  let [numallow, setnumallow] = useState(false)
  const [Password, setpassword] = useState('')

  const passGenerator = useCallback(()=>{
    let pass=''
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    if(sepallow === true) str+= '/?;:@!.'
    if(numallow === true) str+= '1234567890'

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
   
    setpassword(pass)


  },
    [length, sepallow, numallow,])
  //useRef 
  const passRef = useRef(null)
  const copyPass = useCallback(() => {
    if (passRef.current) {
      passRef.current.select(); // Select the text in the input field
      passRef.current.setSelectionRange(0, 99999); // Ensure selection for mobile devices
      window.navigator.clipboard.writeText(passRef.current.value);
      alert("Password copied to clipboard!");
    }
  }, [Password]); 
  



 useEffect(() => {
    passGenerator()

 },[length, sepallow, numallow])



  

  return (
    <>
  <div className=' h-screen w-full bg-slate-900 flex flex-col items-center p-5 '>
    <div className=' bg-amber-700 h-auto w-[60%] flex flex-col justify-center items-center rounded-lg p-5'>
            <h1 className=' text-center text-blue-900'>Password Generator</h1>
        <div className=' w-[80%]'>
            <input 
            type="text"
            readOnly
            value={Password}
            ref={passRef}
            placeholder='Password'
            className=' bg-white w-[80%] p-2 my-2 rounded-l-lg'
            />
            <button className=' w-[20%] bg-blue-500 rounded-r-lg p-2 hover:bg-blue-700 cursor-pointer '
             onClick={copyPass}>Copy</button>
        </div>
      <div className='w-full flex flex-row justify-around'>
            <div>
            <input
            type="range"
            min= {8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setlength(e.target.value)}
            />
            <label htmlFor="length"> Length: {length}</label>
            </div>
            <div>
            <input 
            type='checkbox'
            checked={numallow}
            id='numallow'
            onChange={() => setnumallow(prev => !prev)}
              />
            <label> Include Numbers</label>
            </div>
            <div>
            <input 
            type='checkbox'
            checked={sepallow}
            id='numallow'
            onChange={() => setsepallow(prev => !prev)}
             />
            <label> Include Symbols</label>
            </div>
       </div>
    </div>
  </div>

    

    </>
  )
}

export default App 
