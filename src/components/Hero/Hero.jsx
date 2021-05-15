import React from "react";
import {
  Typography,
  responsiveFontSizes,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import LazyHero from "react-lazy-hero";

import useStyles from "./styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Hero(props) {
  const classes = useStyles();
  return (
    <div>
      <LazyHero
        imageSrc={props.heroPic}
        parallaxOffset="100"
        isFixed="true"
        style={{ overflow: "hidden", marginBottom: "3rem" }}
      >
        <MuiThemeProvider theme={theme}>
          <Typography className={classes.heroText} variant="h1" gutterBottom>
            {props.mainHeader}
          </Typography>
        </MuiThemeProvider>
      </LazyHero>
    </div>
  );
}

export default Hero;
