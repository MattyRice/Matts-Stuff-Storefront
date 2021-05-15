import React from "react";
import { Grid } from "@material-ui/core";
import landPagePic from "../../assets/landingPage.jpg";

import Product from "./Product/Product";
import Hero from "../Hero/Hero";

import useStyles from "./styles";

// const products = [
//     { id:1, name: 'Shirts', description: 'Crewneck', price: '$15'},
//     { id:2, name: 'Pants', description: 'Jeans', price: '$25'},
// ]

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const mainHeader = "Welcome to my collection";

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* TODO: Pass landing page hero picture props to hero component */}
      <Hero heroPic={landPagePic} mainHeader={mainHeader} />
      <Grid container justify="center" spacing={4} m={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
            <Product
              product={product}
              onAddToCart={() => onAddToCart(product.id, 1)}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
