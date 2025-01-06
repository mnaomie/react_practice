import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Avatar'


const App = () => {
  return (
    <div>
      <User firstName="Homer" lastName="Simpson" img="vite.svg"/>
      <User firstName="Bart" lastName="Simpson" img="vite.svg"/>
    </div>
    
  )
}

export default App;