import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { getClientId, login } from "../Api/AuthCalls";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const [clientId, setClientId] = useState("");
  const history = useHistory();

  const signIn = async (response) => {
    let userData = await login(response);
    if (userData) {
      localStorage.setItem("tokenId", response.tokenId);
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
    <p> There is no cliens id </p>
  ) : localStorage.getItem("tokenId") ? (
    <p>You already logged in</p>
  ) : (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={signIn}
        onFailure={failSignIn}
      />
    </div>
  );
}
