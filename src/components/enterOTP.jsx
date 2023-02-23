import React from 'react';
import '../styles/props.css';
import {useState} from 'react';

const EnterOTP = ()=>
{ 
    const [otp,setOTP] = useState(''); 
    const [display,setDisplay] = useState(''); 
    const [success,setSuccess] = useState(''); 

    // get an otp from register page and verify that OTP 
    const verifyOTP = () =>
    { 
        setDisplay(true); 
        setSuccess(false); 
    //     if(otp ==== otpgotfromregiter)
    //     { set success to true 
    //         else set success to false 
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