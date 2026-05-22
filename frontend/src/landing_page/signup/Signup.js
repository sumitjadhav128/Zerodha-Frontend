import React from "react";

function Signup() {
  const handleSignup = () => {
    // normally you would call backend signup API here
    // axios.post("/signup", data)

    // TEMP: direct redirect for testing
    window.location.href = "https://zerodha-frontend-8zs4.onrender.com/";
  };

  return (
    <div>
      <button onClick={handleSignup} style={{display: "flex", alignItems: "center",margin: "10px auto", border: "none"}}>
        Go To Dashboard
      </button>
    </div>
  );
}

export default Signup;
