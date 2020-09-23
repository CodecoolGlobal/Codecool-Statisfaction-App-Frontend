import React from 'react';
import { useHistory } from 'react-router-dom';

//will be used when login function works

export default function (OriginalComponent, isPrivate) {
    function AuthCheck(props) {
        const user = localStorage.getItem("username");
        const history = useHistory();

        if (!isPrivate && user !== null) {
            console.log("you are already logged in");
            history.push('/');
        }

        if (isPrivate && user === null) {
            console.log("LOG IN MAN");
            history.push("/login");
        }
        return <OriginalComponent {...props} />

    }
    return AuthCheck;
}