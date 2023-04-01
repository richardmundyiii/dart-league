import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate("/");
    } catch {
      setError("Log In Failed - Try Again");
    }
  }
  return (
    <div className="card auth-login-form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
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
