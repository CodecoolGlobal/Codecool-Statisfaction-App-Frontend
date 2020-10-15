import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import GoogleLogin from "react-google-login";
import { getClientId, login } from "../../Api/AuthCalls";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const [clientId, setClientId] = useState("");
  const history = useHistory();

  const signIn = async (response) => {
    let userData = await login(response);
    if (userData) {
      window.sessionStorage.setItem("tokenId", response.tokenId);
    }
    history.push("/");
  };

  const failSignIn = (response) => {
    console.log(response);
  };

  useEffect(() => {
    async function fetchData() {
      let id = await getClientId();
      setClientId(id);
    }
    fetchData();
  }, []);

  return clientId === "" ? (
    <p> There is no client id </p>
  ) : window.sessionStorage.getItem("tokenId") ? (
    <p>You already logged in</p>
  ) : (
    <div className="login">
      <h2 className="login-text">Please login with your google account</h2>
      <GoogleLogin
        className="login-btn"
        clientId={clientId}
        buttonText="Login"
        onSuccess={signIn}
        onFailure={failSignIn}
      />
    </div>
  );
}
