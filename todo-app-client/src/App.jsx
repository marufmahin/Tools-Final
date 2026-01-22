import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUsers] = useState([])


const getUser = () =>{
  fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }
}

  useEffect(() => {
    getUser()
  },[])
    

  return (
    <>
      <h1>Users</h1>

      {user.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> <br />
              Username: {user.username} <br />
              Email: {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
