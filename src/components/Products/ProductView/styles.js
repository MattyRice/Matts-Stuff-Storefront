import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  productView: {
    padding: theme.spacing(3),
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
