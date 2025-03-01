import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
//el estado que almacena el token, true
  const [token, setToken] = useState(true);

//el método logout que cambia el token, false
  const logout = () => {
    setToken(false);
  };

  const value = {
    token,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
}