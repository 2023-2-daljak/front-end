import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContextProvider.Provider
      value={{ user, login: login, logout: logout }}
    >
      {children}
    </AuthContextProvider.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
