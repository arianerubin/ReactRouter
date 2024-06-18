import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import Authenticate from "./Authenticate";

export default function SignUpSignIn() {
  const [token, setToken] = useState("");
  return (
    <div>
      <SignUpForm setToken={setToken} token={token} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}
