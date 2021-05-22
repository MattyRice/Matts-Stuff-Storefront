import React from "react";
import commerce from "../../lib/commerce";
import { Container, Grid, Typography } from "@material-ui/core";
import Product from "./../../components/Products/Product/Product";
import { useParams, useRouteMatch } from "react-router-dom";

import useStyles from "./styles";

const CategoryPage = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  // const catName = window.location.pathname.split("/")[2];
  const { catName } = useParams();

  const categoryType = categories.find((cat) => cat.name == catName);

  // console.log(catName);

  return (
    <main className={classes.content}>
      <div className={classes.toobar} />
      {categoryType.map((category) => {
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

export default CategoryPage;
