"use client";
import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const addUser = async (e) => {
    e.preventDefault();
    let responce = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    responce = await responce.json();
    console.log(responce);
  };
  return (
    <div>
      <h1>Add user</h1>
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
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default AddUser;
