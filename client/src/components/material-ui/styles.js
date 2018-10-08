const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    margin: "10px",
    padding: "10px"
  },
  modal: {
    padding: "20px",
    width: "100%",
    maxWidth: "600px"
  },
  item_card: {
    backgroundColor: theme.palette.background.paper,
    height: "180px"
  },
  card_title: {
    marginTop: "40px"
  },
  field: {
    backgroundColor: theme.palette.background.paper,
    margin: "10px"
  },
  padded_button: {
    margin: "16px"
  },
  nav_menu: {
    display: "flex",
    flexDirection: "column"
  },
  list_item_reg: {
    padding: "10px",
    backgroundColor: theme.palette.background.paper
  },
  list_item_light: {
    padding: "10px",
    backgroundColor: theme.palette.lightened_background
  },
  image: {
    margin: "16px"
  },
  sidenav_top: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  typography: {
    padding: "10px"
  },
  main_content: {
    textAlign: "center",
    margin: "auto",
    width: "95%",
    maxWidth: "900px",
    marginTop: "32px",
    marginBottom: "32px",
    backgroundColor: theme.palette.background.default
  },
  pad_me: {
    padding: "6px 20px"
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    backgroundColor: theme.palette.background.default
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  state_field: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontStretch: "100%",
    fontWeight: "400",
    lineHeight: "19px",
    width: "100%",
    marginTop: "24px",
    height: "24px",
    border: "0",
    backgroundColor: "initial",
    color: "rgba(255, 255, 255, 0.7)",
    borderBottom: "1px solid"
  }
});
export { styles };
