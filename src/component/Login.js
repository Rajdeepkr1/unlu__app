import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
   const [state, dispatch] = useStateValue();
  const signIn = () => {
    //   signIn..
      auth
      .signInWithPopup(provider)
      .then((result) =>{
          dispatch({
              type:actionTypes.SET_USER,
              user:result.user,
          })
            console.log(result.user);
      })
      .catch((error)=>alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://unlu.io/unlu-logo.png" alt="logo" />
        <p className="log__q">
          Make their special day all about them by connecting them to their
          favorite celebrity.
        </p>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
