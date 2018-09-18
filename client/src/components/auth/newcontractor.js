import React, { Component } from "react";
// import { AUTH_TOKEN } from "../../constants";
import gql from "graphql-tag";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { Mutation } from "react-apollo";

const CREATE_CONTRACTOR = gql`
  mutation createContractor(
    $userId: ID!
    $businessName: String!
    $city: String!
    $firstName: String!
    $lastName: String!
    $state: String!
    $streetAddress: String!
    $zipcode: String!
  ) {
    createContractor(
      userId: $userId
      businessName: $businessName
      city: $city
      firstName: $firstName
      lastName: $lastName
      state: $state
      streetAddress: $streetAddress
      zipcode: $zipcode
    ) {
      contractor {
        firstName
      }
    }
  }
`;

const states = [
  {
    value: "Alabama",
    label: "AL"
  },
  {
    value: "Alaska",
    label: "AK"
  },
  {
    value: "Arizona",
    label: "AZ"
  },
  {
    value: "Arkansas",
    label: "AR"
  },
  {
    value: "California",
    label: "CA"
  },
  {
    value: "Connecticut",
    label: "CT"
  },
  {
    value: "Colorado",
    label: "CO"
  },
  {
    value: "District of Columbia",
    label: "DC"
  },
  {
    value: "Delaware",
    label: "DE"
  },
  {
    value: "Florida",
    label: "FL"
  },
  {
    value: "Georgia",
    label: "GA"
  },
  {
    value: "Hawaii",
    label: "HI"
  },
  {
    value: "Idaho",
    label: "ID"
  },
  {
    value: "Illinois",
    label: "IL"
  },
  {
    value: "Indiana",
    label: "IN"
  },
  {
    value: "Iowa",
    label: "IA"
  },
  {
    value: "Kansas",
    label: "KS"
  },
  {
    value: "Kentucky",
    label: "KY"
  },
  {
    value: "Louisiana",
    label: "LA"
  },
  {
    value: "Maine",
    label: "ME"
  },
  {
    value: "Maryland",
    label: "MD"
  },
  {
    value: "Massachusetts",
    label: "MA"
  },
  {
    value: "Michigan",
    label: "MI"
  },
  {
    value: "Minnesota",
    label: "MN"
  },
  {
    value: "Mississippi",
    label: "MS"
  },
  {
    value: "Missouri",
    label: "MO"
  },
  {
    value: "Montana",
    label: "MT"
  },
  {
    value: "Nebraska",
    label: "NE"
  },
  {
    value: "Nevada",
    label: "NV"
  },
  {
    value: "New Hampshire",
    label: "NH"
  },
  {
    value: "New Jersey",
    label: "NJ"
  },
  {
    value: "New Mexico",
    label: "NM"
  },
  {
    value: "New York",
    label: "NY"
  },
  {
    value: "North Carolina",
    label: "NC"
  },
  {
    value: "North Dakota",
    label: "ND"
  },
  {
    value: "Ohio",
    label: "OH"
  },
  {
    value: "Oklahoma",
    label: "OK"
  },
  {
    value: "Oregon",
    label: "OR"
  },
  {
    value: "Pennsylvania",
    label: "PA"
  },
  {
    value: "Rhode Island",
    label: "RI"
  },
  {
    value: "South Carolina",
    label: "SC"
  },
  {
    value: "South Dakota",
    label: "SD"
  },
  {
    value: "Tennessee",
    label: "TN"
  },
  {
    value: "Texas",
    label: "TX"
  },
  {
    value: "Utah",
    label: "UT"
  },
  {
    value: "Vermont",
    label: "VT"
  },
  {
    value: "Virginia",
    label: "VA"
  },
  {
    value: "Washinton",
    label: "WA"
  },
  {
    value: "West Virginia",
    label: "WV"
  },
  {
    value: "Wisconsin",
    label: "WI"
  },
  {
    value: "Wyoming",
    label: "WY"
  },
  {
    value: "Puerto Rico",
    label: "PR"
  },
  {
    value: "Virgin Islands",
    label: "VI"
  },
  {
    value: "Guam",
    label: "GU"
  }
];

class NewContractor extends Component {
  state = {
    businessName: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    zipcode: "",
    city: "",
    state: "Alabama"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {
      businessName,
      firstName,
      lastName,
      streetAddress,
      city,
      state,
      zipcode
    } = this.state;
    return (
      <div>
        <Mutation
          mutation={CREATE_CONTRACTOR}
          onCompleted={() => this._confirm()}
        >
          {(createContractor, { loading, error, data }) => (
            <div>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  createContractor({
                    variables: {
                      businessName: businessName,
                      firstName: firstName,
                      lastName: lastName,
                      streetAddress: streetAddress,
                      zipcode: zipcode,
                      city: city,
                      state: state,
                      userId: this.props.userId
                    }
                  });
                  this.setState({
                    businessName: "",
                    firstName: "",
                    lastName: "",
                    streetAddress: "",
                    zipcode: "",
                    city: "",
                    state: ""
                  });
                }}
              >
                <TextField
                  id="field-firstName"
                  label="First Name"
                  name="firstName"
                  className={"modal_field"}
                  value={firstName}
                  onChange={this.handleChange("firstName")}
                  margin="normal"
                />
                <TextField
                  id="field-lastName"
                  label="Last Name"
                  name="lastName"
                  className={"modal_field"}
                  value={lastName}
                  onChange={this.handleChange("lastName")}
                  margin="normal"
                />
                <TextField
                  id="field-businessName"
                  label="Business Name"
                  name="businessName"
                  className={"modal_field"}
                  value={businessName}
                  onChange={this.handleChange("businessName")}
                  margin="normal"
                />
                <TextField
                  id="field-streetAddress"
                  label="Street Address"
                  name="streetAddress"
                  className={"modal_field"}
                  value={streetAddress}
                  onChange={this.handleChange("streetAddress")}
                  margin="normal"
                />
                <TextField
                  id="field-city"
                  label="City"
                  name="city"
                  className={"modal_field"}
                  value={city}
                  onChange={this.handleChange("city")}
                  margin="normal"
                />
                <TextField
                  id="field-state"
                  select
                  label="State"
                  name="state"
                  className={"modal_field"}
                  value={state}
                  onChange={this.handleChange("state")}
                  SelectProps={{
                    MenuProps: {
                      className: "Mister Menu"
                    }
                  }}
                  helperText="State"
                  margin="normal"
                >
                  {states.map(state => (
                    <MenuItem key={state.value} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="field-zipcode"
                  label="Zip Code"
                  name="zipcode"
                  className={"modal_field"}
                  value={zipcode}
                  onChange={this.handleChange("zipcode")}
                  margin="normal"
                />
                <Button type="submit">Finish Account Creation</Button>
              </form>
              {loading && <p> Saving business information</p>}
              {(data || error) && <p> Noooooooo or yes.</p>}
            </div>
          )}
        </Mutation>
      </div>
    );
  }

  _confirm = async () => {
    this.props.handleLogin();
  };
}

export default NewContractor;
