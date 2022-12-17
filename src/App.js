import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Router from "./Router";
import { productsContext } from "./context/productsContext";
import { CartContext } from "./context/cartContext";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setAddToCart] = useState({});

  useEffect(() => {
    let target = false;
    if (!target) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data));
    }
    return () => {
      // cancel the subscription
      target = true;
    };
  }, []);
  return (
    <productsContext.Provider value={products}>
      <Router />
    </productsContext.Provider>
  );
}

export default App;
