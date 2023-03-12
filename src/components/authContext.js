import React, { useContext, useState } from 'react';
import { removeUser } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';

export const UserContext = React.createContext();



export const AuthContext = ({children}) =>{

    const [user,setUser] = useState();
    const dispatch = useDispatch();

    const login = (email)=>{
        setUser(email);
    }

    const logout = async () => {
        setUser(null);
        await dispatch(removeUser());
    }

    return (<UserContext.Provider value={{user,login,logout}}>
           {children}
           </UserContext.Provider>)
};

export const useCustomAuth = () =>{
    return useContext(UserContext);
}