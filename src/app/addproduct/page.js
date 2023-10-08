"use client";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    let data=await fetch(`http://localhost:3000/api/products`,{
        method:"Post",
        body:JSON.stringify({name,price,company,color,category})
    })
    data = await data.json();
  };
  return (
    <div style={{ display: "grid", gap: 10, justifyContent: "center" }}>
      <h1>Add Products</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="company"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="color"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="category"
      />
      <button onClick={(e) => handleSubmit(e)}>Add</button>
    </div>
  );
};

export default AddProduct;
