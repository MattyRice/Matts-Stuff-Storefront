import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import { Add, AddShoppingCartRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <CardActionArea>
      <Card className={classes.root}>
        <Link
          to={"product-view/${product.id}"}
          className={classes.link}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {product.price.formatted_with_symbol}
              </Typography>
            </div>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
            />
          </CardContent>
        </Link>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
            <AddShoppingCartRounded />
          </IconButton>
        </CardActions>
      </Card>
    </CardActionArea>
  );
};

export default Product;
