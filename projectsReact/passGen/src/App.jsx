import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
const [length, setLength] = useState(4)
const [number, setNumber] = useState(false)
const [symbol, setSymbol] = useState(false)
const [password,setPassword] = useState('')
const refPass = useRef(null)

const passwordGen = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (number) str += "0123456789"
  if (symbol) str += "!@#$%^&*()"

  for(let i = 0; i< length; i++){
    let char = Math.floor(Math.random() * str.length) 
    pass += str.charAt(char)
  }

  setPassword(pass)
 
}, [length, number, symbol, setPassword])

const copyPassFromClipboard = useCallback(()=>{
  refPass.current?.select()
  refPass.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordGen()
}, [passwordGen])

  return (
        <>
        <div className='bg-gray-900 h-screen flex justify-center'>
          <div className='bg-white h-[20%] w-[60%] mt-10 rounded-xl flex flex-col  justify-center items-center'>
            <div><h1>Password Genrator</h1></div>
            <div>
            <input
            type='text'
            value={password}
            className='outline-none  py-1 px-3 text-center bg-gray-500 text-white w-[70%] rounded-l-lg'
            placeholder='password'
            readOnly
            ref={refPass}
            />
          <button className='bg-blue-700 text-white rounded-r-lg py-1 px-3 font-bold hover:bg-blue-400'
          onClick={copyPassFromClipboard}

          >Copy</button>
          </div>
           <div className=' flex w-[50%] justify-around'>
            <div>
            <input type="range"
            min={4}
            max={16}
            value = {length}
            onChange={(e) =>{ setLength(e.target.value)}}
            className='mr-2'
            />
            <label>Length:{length}</label>
            </div>
            <div>
              <input type="checkbox"
            defaultChecked={Number}
            id='Number'
            onClick={() =>{
              setNumber((prev)=> !prev)
            }}
            className='mr-2'
            />
            <label htmlFor="Number">Number</label>
            </div>
            <div>
              <input type="checkbox"
              defaultChecked={symbol}
              id='Symbol'
              onClick={() =>{
                setSymbol((prev)=> !prev)
              }}
              className='mr-2'
              />
              <label htmlFor="Symbol">Symbol</label>
            </div>
            
          </div>             
          </div>
          
        </div>
    </>
  )
}

export default App
