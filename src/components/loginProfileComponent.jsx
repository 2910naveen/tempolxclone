import React, { useState } from 'react';
import '../styles/props.css';
import { useCustomAuth } from './authContext';

const LoginProfile = () => {

    const [displayProfile,setDisplayProfile] = useState(false);
    const {logout} = useCustomAuth();
    return(<>
           <div style={{position:'absolute',marginTop:'-20px'}}>
           <button><i className="fa-solid fa-message"></i></button>
           <button><i className="fa-solid fa-bell"></i></button>
           <button>
           <div className='loginprofile'>
           SN
           </div>
           <button className='profiledisplay' onClick={()=>setDisplayProfile(!displayProfile)}><i className="fa-solid fa-chevron-down"></i></button>
           </button>
           {
              displayProfile?<><div style={{width:'300px',border:'1px solid black',borderRadius:'5px',display:'absolute',backgroundColor:'white'}}>
                               <div className='loginprofile'>
                                 SN
                               </div>
                               <div style={{display:'inline-block',marginTop:'0px'}}>
                                <ul style={{display:'inline-block',listStyle:'none',marginBottom:'0px'}}>
                                    <li>Hello,</li>
                                    <li>Segu.Naveen</li>
                                    <li><a style={{textDecoration:'underline',fontSize:'15px'}}>view and edit profiles</a></li>
                                </ul>
                               </div>
                               <hr/>
                               <ul style={{display:'inline-block',listStyle:'none',marginBottom:'0px'}}>
                                <li><i className="fa-sharp fa-regular fa-heart"></i><span style={{paddingLeft:'30px',fontWeight:'bold',fontSize:'15px'}}>My ADS</span></li>
                                <li><i className="fa-regular fa-building"></i><span style={{paddingLeft:'30px',fontWeight:'bold',fontSize:'15px'}}>Buy Business Packages</span></li>
                                <li><i className="fa-solid fa-briefcase"></i><span style={{paddingLeft:'30px',fontWeight:'bold',fontSize:'15px'}}>Bought Packages and Billing</span></li>
                               </ul>
                               <hr />
                               <ul style={{display:'inline-block',listStyle:'none',marginBottom:'0px'}}>
                                <li><i class="fa-regular fa-circle-question"></i><span style={{paddingLeft:'30px',fontWeight:'bold',fontSize:'15px'}}>Help</span></li>
                               </ul>
                               <hr />
                               <ul style={{display:'inline-block',listStyle:'none',marginBottom:'0px'}}>
                                <li><i class="fa-solid fa-gear"></i><span style={{paddingLeft:'30px',fontWeight:'bold',fontSize:'15px'}}>Settings</span></li>
                               </ul>
                               <hr />
                               <ul style={{display:'inline-block',listStyle:'none',marginBottom:'0px'}}>
                                <li><i class="fa-solid fa-arrow-right-from-bracket"></i><button style={{paddingLeft:'30px',fontWeight:'bold',fontSize:'15px',backgroundColor:'white'}} onClick={()=>logout()}>Logout</button></li>
                               </ul>
                               </div>
                               </>:''
           }
           </div>
           </>)
};

export default LoginProfile;