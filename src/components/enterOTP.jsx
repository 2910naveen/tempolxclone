import React from 'react';
import '../styles/props.css';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatestatusofuser } from '../Redux/productSlice';
import { useCustomAuth } from './authContext';

const EnterOTP = ()=>
{ 
    const [otp,setOTP] = useState(''); 
    const [display,setDisplay] = useState(''); 
    const [success,setSuccess] = useState(''); 
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useCustomAuth();

    // get an otp from register page and verify that OTP 
    const verifyOTP = async () =>
    { 
        setDisplay(true); 
        setSuccess(false); 
        console.log(otp+" "+location.state.otp)
        if(parseInt(otp) === parseInt(location.state.otp))
        {
            setSuccess(true);
            auth.login(location.state.email);
            await dispatch(updatestatusofuser(location.state));
            setTimeout(()=>{navigate("/")},2000)
        }
        else
        {
            setSuccess(false);
        }
    } 
            return( <div className="registerbackground"> 
                   <div className="registerbox"> 
                   <h4>Enter the OTP Sent to your Email</h4> 
                   <input type="text" style={{"marginTop":"50px","padding":"10px 10px","border":"2px solid skyblue"}} className="form-control"  value={otp} onChange={(e)=>setOTP(e.target.value)}></input>
                    <button style={{"marginTop":"30px"}} className="btn btn-primary" onClick={()=>verifyOTP()}>Submit OTP</button> 
                    { display? success ? <img src={require(`../images/success.jfif`)}></img> : <img src={require(`../images/failure.jfif`)}></img> :'' } 
                    </div> 
                    </div> )
    };

                    
export default EnterOTP;