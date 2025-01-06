import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Avatar'
import axios from 'axios'
import Example from './img/components/Card'


function App() {

  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const URL = import.meta.env.VITE_URL;
  console.log(URL);
  

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL)
      setUsers(response.data)
    } catch (err) {
      setError(err.message);
      
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  if(loading) {
    return <p>...loading</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <>
      <div>
        <h1>Users List</h1>
        {users && users.map(user => {
          return (
            <Example/>
          )
        })}
      </div>
    </>
  )

  
  
}

export default App;