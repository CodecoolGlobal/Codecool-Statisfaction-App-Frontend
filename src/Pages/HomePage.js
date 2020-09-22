import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import axios from "../axios/axios";

export default function HomePage() {
  const [clientId, setClientId] = useState("");

  const signIn = (response) => {
    console.log(response);
    axios.post("/login", response.tokenId);
  };

  const failSignIn = (response) => {
    console.log(response);
  };

  useEffect(() => {
    axios
      .get("/login")
      .then((result) => {
        if (result.status === 200) {
          setClientId(result.data);
        }
      })
      .catch(() => {
        setClientId(
          "904957387163-nsdtmgpmsdjni36il28hcglgcp06f3ro.apps.googleusercontent.com"
        );
      });
  }, []);

  return clientId === "" ? (
    <p> There is no cliens id </p>
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
