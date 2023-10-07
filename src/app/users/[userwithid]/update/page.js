"use client";
import React, { useEffect, useState } from "react";

const Update = ({ params }) => {
  let id = params.userwithid;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const updateUser = async (e) => {
    e.preventDefault();
    let responce = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    responce = await responce.json();
    console.log(responce);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };
  return (
    <div>
      <h1>Update User</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="date"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter dob"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default Update;
