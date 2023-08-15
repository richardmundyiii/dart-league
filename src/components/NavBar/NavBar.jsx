import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">
              Darts of Santa Cruz
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/teamstandings"
                  role="button"
                  aria-expanded="false"
                >
                  Team Standings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/playerstandings"
                  role="button"
                  aria-expanded="false"
                >
                  Player Standings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/news"
                  role="button"
                  aria-expanded="false"
                >
                  News
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/documents"
                  role="button"
                  aria-expanded="false"
                >
                  DocuCenter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/sponsors"
                  role="button"
                  aria-expanded="false"
                >
                  Sponsors
                </a>
              </li>
            </ul>
            {!user || !user.isAdmin ? (
              <button className="btn btn-danger" id="nav-log-button">
                <a href="/auth">Login</a>
              </button>
            ) : (
              <button className="btn btn-info">
                <Link onClick={handleLogOut} href="/logout" id="nav-log-button">
                  Logout
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
