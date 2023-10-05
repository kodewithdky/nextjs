import Product from "./product";
import costom from '../custom.module.css'
import other from '../other.module.css'
const getProduct = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};
const Page = async () => {
  let products = await getProduct();
  console.log(products);
  return (
    <div>
      <h1 className={other.main}>Product list</h1>
       {
        products.map((item)=>(
            <div>
            <h3 className={costom.main}>Name: {item.title}</h3>
             <Product price={item.price}/>
            </div>
        ))
       }
    </div>
  );
};

export default Page;
