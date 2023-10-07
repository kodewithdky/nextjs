import React from 'react'
async function getUserDetails(id){
    let data=await fetch(`http://localhost:3000/api/users/${id}`)
    data=await await data.json()
    return data.result;
}
const UserDetails =async ({params}) => {
    const user=await getUserDetails(params.userwithid)
  return (
    <div>
      <h2>Users Details</h2>
       <h3>UseId:{user.id}</h3>
       <h3>Name:{user.name}</h3>
       <h3>Eamil:{user.email}</h3>
       <h3>Age:{user.age}</h3>
    </div>
  )
}

export default UserDetails
