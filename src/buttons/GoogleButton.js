import React from "react";
import "./GoogleButton.css";
const GoogleButton = ({ signInWithGoogle }) => {
  return (
    <button className="login-with-google-btn" onClick={signInWithGoogle}>
      Sign In With Google
    </button>
  );
};

export default GoogleButton;
