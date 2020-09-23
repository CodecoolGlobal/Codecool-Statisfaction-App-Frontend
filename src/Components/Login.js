import React, {
    useEffect,
    useState
} from "react";
import GoogleLogin from "react-google-login";
import axios from "../Axios/axios";
import {
    getClientId, login
} from '../Api/AuthCalls'

export default function Auth() {
    const [clientId, setClientId] = useState("");

    const signIn = (response) => {
        console.log(response);
        login(response);
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
        setClientId("904957387163-nsdtmgpmsdjni36il28hcglgcp06f3ro.apps.googleusercontent.com")
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