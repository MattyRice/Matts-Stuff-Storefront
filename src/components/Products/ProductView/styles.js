import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  productView: {
    padding: theme.spacing(2),
  },
  card: {
    height: "20%%",
    width: "100%",
  },
  media: {
    width: "100%",
    // height: "100%",
  },
  tabpanel: {
    backgroundColor: "#eeeeee",
    borderRadius: "0 0 1rem 1rem",
    padding: "2px 5px 2px 20px",
    marginTop: 0,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
