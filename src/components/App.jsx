import { useState } from 'react'
import Header from './Header'
import BasicCard from './Definition'
import Body from './Body'
import { creatGlobalStyle } from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
body {

}`

function App() {

  return (
    <>

      <Header />
      <BasicCard />
      <Body />

    </>
  )
}

export default App
