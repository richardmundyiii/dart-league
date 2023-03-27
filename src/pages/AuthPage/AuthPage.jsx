import "./AuthPage.css";

export default function AuthPage() {
  return (
    <>
      <h2>Login</h2>
      <div className="card auth-login-form">
        <form action="">
          <div class="mb-3 row">
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Email" />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="btn btn-primary text-center" id="login-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
