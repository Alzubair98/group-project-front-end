/* eslint-disable */
import React, { Component } from "react";
import axios from "axios";
import "../component/auth/auth.css";

export default class Rigstration extends Component {
  constructor(props) {
    super(props);

    if (Object.keys(this.props.data).length !== 0) {
      this.state = {
        user: this.props.data.username,
        bike: "",
        location: "",
        reservationsErrors: "",
      };
    } else {
      this.state = {
        user: "",
        bike: "",
        location: "",
        reservationsErrors: "",
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    axios
      .post("http://localhost:3001/reservations", {
        reservation: {
          user: this.state.user,
          bike: this.state.bike,
          location: this.state.location,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("reservations error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginform">
        <form onSubmit={this.handleSubmit}>
          <h2 className="headerTitle">Add New Bike</h2>
          <div className="row">
            <label className="label">Username</label>
            <input
              type="name"
              name="user"
              placeholder="Username"
              value={this.state.user}
              onChange={this.handleChange}
              required
            />
            <label className="label mt-4">BikeName</label>
            <input
              type="bike"
              name="bike"
              placeholder="BikeName"
              value={this.state.bike}
              onChange={this.handleChange}
              required
            />
            <label className=" mt-4 label">Location</label>
            <input
              type="location"
              name="location"
              placeholder="Location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />

            <button type="submit" className="button row">
              Add Bike
            </button>
          </div>
        </form>
      </div>
    );
  }
}
