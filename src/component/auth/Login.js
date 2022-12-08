import React, { Component } from "react";
import axios from "axios";
import "./auth.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      loginErrors: "",
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
        "http://localhost:3001/sessions",
        {
          user: {
            username: this.state.username,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          console.log("logged in", response);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginform">
        <form onSubmit={this.handleSubmit}>
          <h2 className="headerTitle">Login</h2>
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
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
