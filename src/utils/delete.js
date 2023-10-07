"use client";
import React from "react";

const DeleteUser = (props) => {
  const userId = props.id;
  console.log(userId);
  const deleteUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result.success) {
      alert("success");
    } else {
      alert("failed");
    }
  };
  return <button onClick={deleteUser}>Delete User</button>;
};

export default DeleteUser;
