import React from "react";
import Loading from "./loading";

const getUser = async () => {
  let data =await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
};
const UserList = async() => {
    let users=await getUser()
    console.log(users)
  return (
    <div>
      <h1>user name list</h1>
      {
        users.map((user)=>(
          <>
           <h5>Name:{user.firstName} {user.maidenName} {user.lastName}</h5>
           <p>Age:{user.age}</p>
           <p>Gender:{user.gender}</p>
           <p>Email:{user.email}</p>
           <p>Phone NO:{user.phone}</p>
           <br />
          </>
        ))
      }
    </div>
  );
};

export default UserList;
