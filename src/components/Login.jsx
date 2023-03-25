import React from 'react';
import '../styles/props.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { findregistereduserbyemail } from '../Redux/userSlice';
import {sendotpmailtoregistereduser} from '../Redux/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Login = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email,setEmail] = useState();
    const [msg,setMsg] = useState('');
    
    const handleNext = async ()=>{
      console.log("inside handleNext");
      //try to check email with regex
      if(email === undefined)
      {
         setMsg("Please Enter The Email");
      }
      else
      {
       
        // await dispatch(findregistereduserbyemail(email));
         const user = await axios.get(`http://localhost:5000/olx/findregistereduserbyemail/${email}`)
         console.log(user);
          if(user.data && user.data.data.length>0)
          {
             console.log("inside if");
             const verified = user.data.data.find((usr)=>usr.status === 'verified');
             console.log(verified);
             if(Object.keys(verified).length>0)
             {
              console.log("inside if block");
              const  generateOTP = () => {
                var OTP = new Uint32Array(1);
                OTP = crypto.getRandomValues(OTP);
                OTP = '0.' + OTP[0];
                return Math.floor(OTP*1000000);
              }
              const otp = generateOTP();
              console.log(otp);
              setTimeout(async ()=>{
                navigate("/enterotp",{state:{email:email,otp:otp}});
              },5000);
              await dispatch(sendotpmailtoregistereduser({email:email,otp:otp})).then(res=>{
                toast.success('OTP sent to Your mailSuccessfully!', {
                  position: toast.POSITION.TOP_LEFT
              });
              });
              
              
             }
          }
          else
             {
                console.log("inside else");
                setMsg("Please Register First");
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
                { <p style={{'color':'red',"fontSize":'20px','fontWeight':'bolder','textAlign':'center'}}>{msg}</p>}

            </div>
          </div>
          <ToastContainer />
          </>
};

export default Login;