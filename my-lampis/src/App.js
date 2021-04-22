import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";

import { Navbar, Products } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    // commerce.products.list().then((products)=>{
    //     this.setState({products: products.data});
    // }).catch((error) =>{
    //     console.log('There was an error fetching the products', error);
    // });
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  console.log(products);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Products products={products} />
        </Switch>
      </div>
    </Router>
  );
  };

export default App;
