import { createContext, useContext } from "react";

export const AuthContext = createContext({
  authToken: null,
  setAuthTken: (data) => {},
  userId: null,
  setUserId: (data) => {},
  userEmail: null,
  setUserEmail: (data) => {}
});

export function useAuthContext() {
  return useContext(AuthContext);
}