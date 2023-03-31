import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";

export default function AuthPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <button
        className="btn btn-danger"
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? <SignUpForm /> : <LoginForm />}
    </main>
  );
}
