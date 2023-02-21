import React from 'react';
import '../styles/props.css';

const Login = () =>{
    return<>
          <div className="blackeffect">
            <div className="card">
                <button className="fa-sharp fa-solid fa-arrow-left logini"></button>
                <button className="fa-sharp fa-solid fa-x logini"></button>
                <h4 className="h4class">Enter your email to login</h4>
                <input type="email" className="form-control logininput" placeholder='Email'/>
                <p className="loginnote">If you are a new user please select any other login option from previous page.</p>
                <button className="loginbutton">Next</button>
                <p style={{"padding-left":"15px","width":"90%","textAlign":"center"}}>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
            </div>
          </div>
          </>
};

export default Login;