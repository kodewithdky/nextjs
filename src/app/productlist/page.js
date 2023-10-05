'use client'
// .....
import { useEffect, useState } from "react";

const Page = async () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setProduct(data.products);
  };
  useEffect(() => {
    getProduct()
  }, []);
  return (
    <div>
      <h1>Product list</h1>
      {
        product.map(item=>{
            <h3>Name: {item.title}</h3>
        })
      }
    </div>
  );
};

export default Page;
