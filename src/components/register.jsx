import React from 'react';import '../styles/props.css';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postUserRegisterDetails} from '../Redux/productSlice';

const Register = () =>
{ 
    const [email,setEmail] = useState(''); 
    const [isSubmit,setIsSubmit] = useState(); 
    const [click,setClick] = useState(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => 
    { 
        setClick(true); 
        if(email === '') 
        { 
            setIsSubmit(false); 
        } 
        else 
        { 
            setIsSubmit(true);
            const  generateOTP = () => {
          
                // Declare a digits variable 
                // which stores all digits
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 6; i++ )
                {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }
            const otp = generateOTP();
            await dispatch(postUserRegisterDetails({email:email,otp:otp}));
            navigate("/enterotp",{state:{email:email,otp:otp}});

        } 
    }; 
    return(
            <div className="registerbackground"> 
            <div className='registerbox'> 
            <button className="fa-sharp fa-solid fa-arrow-left logini" onClick={()=>navigate(-1)}></button>
            <h4 className="h4class" style={{"marginTop":"50px"}}>Register with your Email</h4>
             <input style={{"marginTop":"50px","padding":"10px 10px","border":"2px solid skyblue"}} className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input> 
             <p className="loginnote" style={{"backgroundColor":"yellow",padding:"10px 10px","marginTop":"30px"}}>An OTP will be send to your email which enables you to register to this app</p> 
             <button style={{"marginTop":"30px"}} className="loginbutton" onClick={()=>handleSubmit()}>Register</button> 
             { click ? isSubmit ? <p style={{"color":"green"}}>OTP has been sent to your email</p>:<p style={{"color":"red"}}>Please Enter The Email</p> : '' } 
             </div> 
             </div>
              )};
export default Register;