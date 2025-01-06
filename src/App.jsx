import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const isAuthenticated = true;

const App = () => {
  return(
    <div>
      <h1>Hello {isAuthenticated ? 'User' : 'Guest'}</h1>
    </div>
  )
  
}