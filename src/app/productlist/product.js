"use client"
import React from 'react'

const Product = (props) => {
  return (
    <div>
        <button onClick={()=>alert("Price: "+props.price)}>check price</button>
    </div>
  )
}

export default Product
