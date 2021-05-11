import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  productView: {
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    width: "100%",
  },
  media: {
    width: "100%",
    // height: "100%",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
