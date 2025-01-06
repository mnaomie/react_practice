import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Avatar'
import axios from 'axios'


function App() {

  const [users, setUsers] = useState(null);
  const URL = 'https://jsonplaceholder.typicode.com/users';
  console.log(URL);
  

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL)
      setUsers(response.data)
    } catch (err) {
      console.error(err);
      
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <div>
        <h1>Users List</h1>
        {users && users.map(user => {
          return (
            <>
              <h3>My name is {user.name}</h3>
              <p>Email : {user.email}</p>
            </>
          )
        })}
      </div>
    </>
  )
  
}

export default App;