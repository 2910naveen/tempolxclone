import React from 'react';import '../styles/props.css';
import {useState} from 'react';

const Register = () =>
{ 
    const [email,setEmail] = useState(''); 
    const [isSubmit,setIsSubmit] = useState(); 
    const [click,setClick] = useState(); 
    const handleSubmit = () => 
    { 
        setClick(true); 
        if(email === '') 
        { 
            setIsSubmit(false); 
        } 
        else 
        { 
            setIsSubmit(true); 
        } 
    }; 
    return( <div className="registerbackground"> 
            <div className='registerbox'> 
            <h4 className="h4class" style={{"marginTop":"50px"}}>Register with your Email</h4>
             <input style={{"marginTop":"50px","padding":"10px 10px","border":"2px solid skyblue"}} className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input> 
             <p className="loginnote" style={{"backgroundColor":"yellow",padding:"10px 10px","marginTop":"30px"}}>An OTP will be send to your email which enables you to register to this app</p> 
             <button style={{"marginTop":"30px"}} className="loginbutton" onClick={()=>handleSubmit()}>Register</button> 
             { click ? isSubmit ? <p style={{"color":"green"}}>OTP has been sent to your email</p>:<p style={{"color":"red"}}>Please Enter The Email</p> : '' } 
             {/* After successfull submission of email,otp should be sent to the email and navigate to enterotp page with otp object*/} 
             </div> 
             </div>
              )};
export default Register;