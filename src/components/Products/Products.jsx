import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import landPagePic from "../../assets/landingPage.jpg";

import Product from "./Product/Product";
import Hero from "../Hero/Hero";

import useStyles from "./styles";

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();
  const mainHeader = "Welcome to my collection";
  // console.log({ categories });
  const homePageCats = categories.filter(
    (cat) =>
      cat.name == "Shoes" ||
      cat.name == "Accessories" ||
      cat.name == "Bottoms" ||
      cat.name == "Tops"
  );
  console.log({ homePageCats });
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Hero heroPic={landPagePic} mainHeader={mainHeader} />
      {homePageCats.map((category) => {
        return (
          <div>
            <Typography variant="h3" component="h2">
              {category.name}
            </Typography>
            <Grid container justify="center" spacing={12}>
              {category.productsData.map((product) => (
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className={classes.root}
                >
                  <Product
                    product={product}
                    onAddToCart={() => onAddToCart(product.id, 1)}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        );
      })}
    </main>
  );
};

export default Products;
