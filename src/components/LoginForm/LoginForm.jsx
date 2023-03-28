import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }
  return (
    <div className="card auth-login-form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div class="mb-3 row">
          <div class="col-sm-10">
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              class="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="btn btn-primary text-center" id="login-button">
          Login
        </button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
