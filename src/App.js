import Product from "./components/Product";
import Cart from "./components/Cart";
import {useState,useEffect} from 'react'
import logo from './assets/1.jpg'
function App() {
  const  [products, setProducts] = useState([]);
  const  [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>setProducts(res))
    setLoading(false)
  }, []);
  console.log("products:" , products);
  console.log("products:" , products);
  return (
      <div className="App">
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h1>Products</h1>
            {loading ? <div>loading .....</div> : products.map((pr) => (
              <Product key={pr.id} id={pr.id} title={pr.title} price={pr.price} />
            ))}
          </div>
          <div style={{ width: "40%" }}>
            <Cart />
          </div>
        </div>
        <div>
          <img src={logo} alt="hello" />
        </div>
      </div>
  );
}

export default App;
