import React, { Component } from "react";
import { withRouter } from "react-router";

//This component will render on the /parts route when the user is logged in
//It is a child of the home component.
class Parts extends Component {
  render() {
    return (
      <div>
        <p>PART PLACEHOLDER</p>
      </div>
    );
  }
}

export default withRouter(Parts);
