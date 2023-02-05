import { AuthContext } from "./auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export {RedirectForLogin};
function RedirectForLogin({children}) {
  const userInfo = useContext(AuthContext);

  const authToken = localStorage.getItem('authToken');

  console.log("Auth token inside privateRoute from local storage: ",authToken);

  // if (!userInfo.authToken) {
  //   return <Navigate to="/" />
  // } 
  if (authToken) {
    return <Navigate to="/blogs" />
  }

  return children;

}