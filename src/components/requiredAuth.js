import React,{Component} from 'react';
import { useCustomAuth } from './authContext';
import {useNavigate} from "react-router-dom";
import Login from './Login';

const RequiredAuth = ({children})=>
{
    const {user} = useCustomAuth();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate('/login');
    }
    console.log(user)
    if(!user)
    {
        return <>
               <Login/>
               </>;
    }
    return children;
};

export default RequiredAuth;