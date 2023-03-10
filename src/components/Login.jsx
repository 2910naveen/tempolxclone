import React from 'react';
import '../styles/props.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { findregistereduserbyemail } from '../Redux/userSlice';
import {sendotpmailtoregistereduser} from '../Redux/userSlice';

const Login = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email,setEmail] = useState();
    const [isClick,setIsClick] = useState(false);
    const [isValid,setIsValid] = useState(false);
    const [isRegistered,setIsRegistered] = useState(false);
    
    var registeredUser = useSelector(state=>state.userreducer.user.data && state.userreducer.user.data.data);
  
    const handleNext = async ()=>{
      setIsClick(true);
      //try to check email with regex
      if(email === '')
      {
         setIsValid(false);
      }
      else
      {
        setIsValid(true);
        await dispatch(findregistereduserbyemail(email));
        if(registeredUser && registeredUser.length>0)
        {
           const verified = registeredUser.find((usr)=>usr.status === 'verified');
           console.log(verified);
           if(Object.keys(verified).length>0)
           {
            setIsRegistered(true);
            console.log("inside if block");
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
            navigate("/enterotp",{state:{email:email,otp:otp}});
            await dispatch(sendotpmailtoregistereduser({email:email,otp:otp}));
           }
           else
           {
             setIsRegistered(false);
           }
        }
      }
    }

    return<>
          <div className="blackeffect">
            <div className="card">
                <button className="fa-sharp fa-solid fa-arrow-left logini" onClick={()=>navigate(-1)}></button>
                {/* <button className="fa-sharp fa-solid fa-x logini"></button> */}
                <h4 className="h4class">Enter your email to login</h4>
                <input type="email" className="form-control logininput" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                <p className="loginnote">If you are a new user please select any other login option from previous page.</p>
                <button className="loginbutton" onClick={()=>handleNext()}>Next</button>
                <p style={{"padding-left":"15px","width":"90%","textAlign":"center"}}>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
                { isClick ? isValid ? isRegistered ? '':<p style={{'color':'red',"fontSize":'20px','fontWeight':'bolder','textAlign':'center'}}>Please First Register To Login</p>:<p style={{'color':'red',"fontSize":'20px','fontWeight':'bolder','textAlign':'center'}}>Please Enter The Email</p> : ''}

            </div>
          </div>
          </>
};

export default Login;