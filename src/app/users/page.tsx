import React from 'react'

interface User {
    id:number,
    name:string;
}

const UsersPage = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
     const user :User [] =  await res.json();

  return (
    <div>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
          <ul>
            {user.map(user=><li key={user.id} >{user.name}</li>)}
          </ul>
    </div>
  )
}

export default UsersPage
