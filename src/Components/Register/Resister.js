import "./Register.css";
function Register(){
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
                <div className="loginname">Register</div>
                <label>Name</label><br/>
                <input type="text" placeholder="firstname lastname" className="inputtag"/><br/>
                <label>Email id</label><br/>
                <input type="text" placeholder="Test@gmail.com" className="inputtag"/><br/>
                <label>Password</label><br/>
                <input type="Password" placeholder="Test@123" className="inputtag"/><br/>
                <button className="buttonlogin">Register</button>
                </div>
            </div>
           
        </div>
    );
}export default Register;