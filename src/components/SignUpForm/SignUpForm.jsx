import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../utilities/users-service";
import "./SignUpForm.css";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      const user = await signUp(formData);
      this.props.setUser(user);
      useNavigate("/");
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <main>
        <div className="card m-4 p-4">
          <div className="card-body">
            <div className="form-container">
              <h2>Sign Up</h2>
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input
                  className="form-control m-2"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Your Name..."
                  required
                />
                <input
                  className="form-control m-2"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your Email..."
                  required
                />
                <input
                  className="form-control m-2"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                  required
                />
                <input
                  className="form-control m-2"
                  type="password"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="submit"
                  disabled={disable}
                  className="btn btn-primary m-2"
                  style={{ width: "100%" }}
                >
                  SIGN UP
                </button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        </div>
      </main>
    );
  }
}
