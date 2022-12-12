/* eslint-disable */
import React, { Component } from "react";
import axios from "axios";
import "./auth.css";

export default class Rigstration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      registrationsErrors: "",
    };

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
      .post(
        "http://localhost:3001/registrations",
        {
          user: { username: this.state.username },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginform">
        <form onSubmit={this.handleSubmit}>
          <h2 className="headerTitle">Sign Up</h2>
          <div className="row">
            <label className="label">Username</label>
            <input
              type="name"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />

            <button type="submit" className="button row">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
