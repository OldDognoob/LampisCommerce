import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Pet Trimmer",
    description: "Electric Pets Hair Low Noise Trimmers for Dogs",
    price: "€39.99",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71qFFEQLzGL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Toys Dog Basket",
    description: "Pet Toy and Accessory Storage Bin",
    price: "€15.99",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81EiKQp1veL._AC_SL1500_.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
