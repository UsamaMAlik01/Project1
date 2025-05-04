// import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Usama from './Usama.jsx'

// let ok = 'OKOK'
// let newElem = createElement (
//   'a',
//   {href: 'https://www.google.com', target: '_blank'},
//   "Click Here",
//   ok
// )

createRoot(document.getElementById('root')).render(
  // newElem
 <>

    <App/>
    <Usama />
  </>
)
