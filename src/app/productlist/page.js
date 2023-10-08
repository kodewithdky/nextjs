import React from "react";

const getProduct = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.seccess) {
    return data.result;
  } else {
    return { success: false };
  }
};

const ProductList = async () => {
  const products = await getProduct();

  return (
    <div>
      <h1>Product list</h1>
      {/* {
        products.map((item)=>(
            <h1>{item.name}</h1>
        ))
      } */}
    </div>
  );
};

export default ProductList;
