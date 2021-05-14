// TODO: Create product view with
// - product image carousel
// * add to cart button
// * increment or decerement

import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Container,
  Typography,
  CardMedia,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./styles";

import CarouselPictures from "../../CarouselPictures/CarouselPictures";

import { commerce } from "../../../lib/commerce";

const ProductView = ({ AddToCart }) => {
  const classes = useStyles();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(0);
  const [productPictures, setProductPictures] = useState(0);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, quantity, description, assets, categories, media } =
      response;
    setProduct({
      id,
      name,
      price,
      quantity,
      description,
      category: categories.name,
      // src: assets.map((x) => x.url),
      assets,
      media: media.source,
      price: price.formatted_with_symbol,
    });

    console.log(response);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  const handleQuantity = (params) => {
    if (params === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (params === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(product.assets);

  // let props = {};
  // props.assets
  //   ? props.assets.map((url) => console.log(url))
  //   : console.log("Ok");

  return (
    <>
      <div className={classes.toolbar} />
      <Container className={classes.productView}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Carousel autoPlay={false}>
              {/* FIXME:  */}
              {/* Expected ===> Display images from assets array of objects and display it in a carousel */}
              {/* Result ===> cannot map undefined  */}
              {/* Notes: There is something wrong with the props passing through to the Carousel Pictures function */}

              {product.assets.map((item, index) => {
                return <CarouselPictures item={item} key={index} />;
              })}
            </Carousel>
            {/* <img src={product.media} alt="product" className={classes.media} /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: "700" }}>
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontWeight: "200" }}
            >
              {product.category}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>

            {/* TABS */}
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              variant="fullWidth"
              aria-label="product descritpion"
            >
              <Tab label="Size and Fit" />
              <Tab label="Shipping" />
              <Tab label="Details and Material" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className={classes.tabpanel}>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  color="textPrimary"
                />
              </div>
            </TabPanel>
            <Grid item xs={12} md={12}>
              <div className={classes.buttons}>
                <Button
                  type="button"
                  size="small"
                  onClick={() => {
                    handleQuantity("decrease");
                  }}
                >
                  {" "}
                  -{" "}
                </Button>
                <Typography style={{ padding: "0 8px 0 8px" }}>
                  {quantity}
                </Typography>
                <Button
                  type="button"
                  size="small"
                  onClick={() => {
                    handleQuantity("increase");
                  }}
                >
                  {" "}
                  +{" "}
                </Button>
                <Button
                  type="button"
                  size="small"
                  onClick={() => {
                    AddToCart(product.id, quantity);
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default ProductView;
