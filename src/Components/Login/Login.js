import React from "react";
import "./Login.css"
function Login(){

    return(
        <div className="background">
            <div className="header">
                <div className="headername">Blogs</div>
               <div>
                <span className="headerlinks">Login</span>
                <span className="headerlinks">Register</span>
                </div>
            </div>
            <div>
              <div className="loginsection">
                <div className="firstname">Blogs</div>
                <div className="secondline">Publish your passion,your way...</div>
                <div className="loginname">Login</div>
                <label>Email id</label><br/>
                <input type="text" placeholder="Test@gmail.com" className="inputtag"/><br/>
                <label>Password</label><br/>
                <input type="Password" placeholder="Test@123" className="inputtag"/><br/>
                <button className="buttonlogin">Login</button>
                </div>
            </div>
        </div>
    );
}
export default Login;