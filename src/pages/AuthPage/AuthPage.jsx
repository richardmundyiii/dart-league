import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";

export default function AuthPage({ setUser, user }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <button
        className="btn btn-danger"
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} user={user} />
      ) : (
        <LoginForm setUser={setUser} user={user} />
      )}
    </main>
  );
}
