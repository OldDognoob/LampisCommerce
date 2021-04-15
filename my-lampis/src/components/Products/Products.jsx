import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id:1, name:'Pet Trimmer', description:'Electric Pets Hair Low Noise Trimmers Shaver Shears for Dogs', price:'€39.99'},
    {id:2, name:'Toys Dog Basket', description:'Pet Toy and Accessory Storage Bin', price:'€15.99'},
];

const Products = () => {
  <main>
      <Grid container justify="center" spacing={4}>
          {products.map((product)=>(
              <Grid item key={product.id} xs={12} sm={6} md={4}lg={3}>
                  <Product product={product}/>
              </Grid>
          ))}
      </Grid>
  </main>
}

export default Products;
