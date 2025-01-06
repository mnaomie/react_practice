import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Avatar'


function App() {

  const characters = [
  {
    firstName: 'Bart',
    lastName: 'Simpson',
    image: 'https://static.wikia.nocookie.net/heroes-fr/images/3/3b/Bart_Simpson_.png/revision/latest?cb=20200819150449&path-prefix=fr' 
  },
  {
    firstName: 'Homer',
    lastName: 'Simpson',
    image: 'https://static.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest?cb=20110703093455&path-prefix=fr'
  }
]
  return (
    <>
      <div>
        <h1>Simpson Family</h1>
        {characters.map(character => {
          return (
            <User {...character}/>
          )
        })}
      </div>
    </>
  )
}

export default App;