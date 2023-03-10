import React, { useContext, useState } from 'react';

export const UserContext = React.createContext();


export const AuthContext = ({children}) =>{

    const [user,setUser] = useState();

    const login = (email)=>{
        setUser(email);
    }

    const logout = () => {
        setUser(null);
    }

    return (<UserContext.Provider value={{user,login,logout}}>
           {children}
           </UserContext.Provider>)
};

export const useCustomAuth = () =>{
    return useContext(UserContext);
}