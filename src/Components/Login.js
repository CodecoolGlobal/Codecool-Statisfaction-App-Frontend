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
      localStorage.setItem("email", userData.data.email);
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
