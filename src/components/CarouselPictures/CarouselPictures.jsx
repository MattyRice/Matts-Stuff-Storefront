import React from "react";
import { Paper, CardMedia, Card } from "@material-ui/core";
import useStyles from "./styles";

function CarouselPictures(props) {
  const classes = useStyles();
  return (
    <div>
      {/* <Paper
      // className={classes.media}
      // style={{
      //   backgroundColor: props.assets.color,
      // }}
      // elevation={10}
      > */}
      {/* <CardMedia image={props.item.url} /> */}
      <img src={props.item.url} alt="image" className={classes.image} />

      {/* <p>{props.item.url}</p> */}
      {/* </Paper> */}
    </div>
  );
}

export default CarouselPictures;
