import React,{ createContext,useEffect,useState } from 'react'
import { authContext } from './Firebase'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user,setUser] = useState(null);

  useEffect(() => {
    authContext.auth().onAuthStateChanged( user => {
        setUser(user);
    })
  });

    return(
        <>
        <GlobalContext.Provider value={{ user }}>
            {children}
        </GlobalContext.Provider>
        </>
    )
};