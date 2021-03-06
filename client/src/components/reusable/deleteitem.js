import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Typography, Paper, withStyles, Grid } from "@material-ui/core";
import { Mutation } from "react-apollo";
import {
  DELETE_JOB,
  DELETE_NOTE,
  DELETE_PART,
  DELETE_CLIENT
} from "../../mutations";
import { styles } from "../material-ui/styles.js";

//  This component renders as a child of many components
//  It presents the user with a message asking if they are sure
//  they want to delete the relevant item, and cancel and delete
//  buttons.

//  PROPS:
//    item: the object that may be deleted
//    type: the type of the item
//    cancelDelete: a method to stop showing the modal
//    after_path: the path to be rendered after deletion.

class DeleteItem extends Component {
  _confirm = () => {
    this.props.cancelDelete();
    const after_path = this.props.after_path ? this.props.after_path : (this.props.location.state ? this.props.location.state.after_path : null);
    if (after_path) {
      this.props.history.push(after_path);
    }
    else {
      this.props.refetch();
    }
  };
  render() {
    const { classes } = this.props;
    let name = "";
    let chosen_mutation = "";
    switch (this.props.type) {
      case "job":
        name = this.props.item.name;
        chosen_mutation = DELETE_JOB;
        break;
      case "part":
        name = this.props.item.name;
        chosen_mutation = DELETE_PART;
        break;
      case "note":
        name = this.props.item.title;
        chosen_mutation = DELETE_NOTE;
        break;
      case "client":
        if (this.props.item.businessName) name = this.props.item.businessName;
        else name = `${this.props.item.firstName} ${this.props.item.lastName}`;
        chosen_mutation = DELETE_CLIENT;
        break;
      default:
        break;
    }
    return (
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={10} className={classes.delete}>
            <Typography variant="title" paragraph>
              Are you sure you want to delete {name}?
            </Typography>
          </Grid>

          <Grid item xs={10} className={classes.delete}>
            <Grid container justify="space-around">
              <Mutation
                mutation={chosen_mutation}
                variables={{ id: this.props.item.id }}
                onCompleted={data => this._confirm(data)}
              >
                {mutation => (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={mutation}
                    type="submit"
                  >
                    Delete
                  </Button>
                )}
              </Mutation>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.cancelDelete}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withRouter(withStyles(styles)(DeleteItem));
