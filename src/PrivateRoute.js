import { AuthContext } from "./auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export {PrivateRoute};
function PrivateRoute({children}) {
  const userInfo = useContext(AuthContext);
  

  const authToken = localStorage.getItem('authToken');
  var decoded = jwt_decode(authToken);

  console.log("Auth token inside privateRoute from local storage: ",authToken);
  console.log(decoded.exp);
  console.log("d",Date.now())

  // if (!userInfo.authToken) {
  //   return <Navigate to="/" />
  // } 
  if (!authToken) {
    return <Navigate to="/" />
  }

  return children;

}