import DeleteUser from '@/utils/delete';
import Link from 'next/link';
import React from 'react'


async function getUsers(){
    let data=await fetch("http://localhost:3000/api/users/")
    data=await await data.json()
    return data;
}
const User = async() => {
    const users=await getUsers()
    console.log(users)
  return (
    <div>
      <h1>user page</h1>
      {
        users.map((user)=>(
            <div >
            <span><Link href={`users/${user.id}`}>{user.name}</Link></span>
               
            <span style={{padding:"10px",marginLeft:"10px"}}><Link href={`users/${user.id}/update`}>Edit</Link></span>
            <DeleteUser id={user.id}/>
            </div>
        ))
      }
    </div>
  )
}

export default User
