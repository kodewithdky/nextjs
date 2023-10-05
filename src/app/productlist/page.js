const productList = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};
const Page = async () => {
  let products = await productList();
  console.log(products);

  return (
    <div>
      <h1>Product list</h1>
      {products.map((item) => (
        <div>
          <h3>
            Name: {item.title} Price:{item.price}
          </h3>
          <h5>Description: {item.description}</h5>
        </div>
      ))}
    </div>
  );
};

export default Page;
