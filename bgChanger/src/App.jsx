import React from 'react'
import './App.css'

function App() {
  //My Approch
//   const body = document.querySelector('body')
//   const button = document.querySelectorAll('button')
//   body.style = ''

// const buttons = function(){
//   button.forEach((btn) => {
//     btn.addEventListener('click', function(){
//       body.style.backgroundColor = btn.innerHTML.toLowerCase()
//     })
//   })
// }
let [color, setcolor] = React.useState('slategray')

  return (
    <>
    <div className=' w-full h-screen flex
   justify-center items-end p-10' style={{backgroundColor: color}}>
      <div className='bg-black w-[90%] flex flex-row justify-between items-center p-4 rounded-lg '>
        <button className='bg-red-600 rounded p-2 px-4' onClick={() => setcolor('red')}>Red</button>
        <button className='bg-green-600 rounded p-2 px-4' onClick={() => setcolor('green')} >Green</button>
        <button className='bg-blue-600 rounded p-2 px-4'onClick={() => setcolor('blue')}>Blue</button>
        <button className='bg-pink-600 rounded p-2 px-4'onClick={() => setcolor('pink')}>Pink</button>
        <button className='bg-purple-600 rounded p-2 px-4'onClick={() => setcolor('purple')}>Purple</button>
        <button className='bg-white rounded p-2 px-4'onClick={() => setcolor('white')}>White</button>
        </div> 
        </div>
    </>
  )
}

export default App
