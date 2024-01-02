import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
