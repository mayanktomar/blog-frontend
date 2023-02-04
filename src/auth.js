// import { createContext, useContext } from "react";

// export const authContext = createContext({
//   authToken: null,
//   userEmailId: null,
//   userId: null,
//   setAuthToken: (data) => {},
//   setEmailId: (data) => {},
//   setUserId: (data) => {}
// });

// export function useAuthContext() {
//   return useContext(authContext);
// }


import { createContext } from "react";

 export const AuthContext = createContext(null);
