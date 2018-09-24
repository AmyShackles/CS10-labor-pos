import React, { Component } from "react";
import { withRouter } from "react-router";
import "./home.css";
import {
  Notes,
  Tags,
  Parts,
  Invoices,
  SideNav,
  Start,
  Settings,
  Jobs,
  Clients
} from "../../components";
import { Route } from "react-router-dom";
import { Hidden, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

//The home component is a container component that renders when the user is logged in and displays different
//content depending on the current route.
class Home extends Component {
  //This method destroys the auth token in local storage and this logs the user out.
  logout = () => {
    console.log(localStorage.auth_token);
    localStorage.removeItem("auth-token");
    this.props.history.push("/");
  };

  //The mobileOpen variable on state tracks whether the navigation drawer is open in small screen mode.
  state = {
    mobileOpen: false
  };

  //This method is used in small screen mode to toggle the apperance of the nav drawer.
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    return (
      <div className="d-flex flex-column">
        {/*This little fellow here is the button to toggle the nav drawer in small screen mode.*/}
        <IconButton
          color="inherit"
          aria-label="Open sidenav"
          onClick={this.handleDrawerToggle}
          className="mr-auto"
        >
          <MenuIcon />
        </IconButton>
        {/*There are two Drawer components because one is hidden at any given time for responsiveness
        This is the drawer that displays in the small view (Baby Drawer)
        It is toggleable.*/}
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}
          >
            <SideNav logout={this.logout} />
          </Drawer>
        </Hidden>
        {/*This is the drawer that displays in the large view. (Papa Drawer)
        It is permanently open.*/}
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open>
            <SideNav logout={this.logout} />
          </Drawer>
        </Hidden>
        {/*These are the routes that render different content components depending on the
        current path.*/}
        <main>
          <div className="content_area">
            <Route exact path="/" component={Start} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/parts" component={Parts} />
            <Route exact path="/invoices" component={Invoices} />
            <Route exact path="/settings" component={Settings} />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Home);