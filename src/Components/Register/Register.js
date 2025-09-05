import "./Register.css";
import { useNavigate } from "react-router-dom";
function Register(){
    const navigate=useNavigate();
    const navigateToLogin=()=>{
        navigate("/login")
    }
    const navigateToDashboard=()=>{
        navigate("/")
    }
    const navigateToRegister=()=>{
        navigate("/register")
    }
    const navigateTohelloworld=()=>{
        navigate("/blogs")
    }
    return(
        <div className="background2">
            <div className="header2">
                <div className="headername2" onClick={navigateToDashboard}>Blogs</div>
               <div>
                <span className="headerlinks2" onClick={navigateToLogin}>Login</span>
                <span className="headerlinks2"onClick={navigateToRegister}>Register</span>
                </div>
            </div>
            <div>
              <div className="loginsection2">
                <div className="firstname2">Blogs</div>
                <div className="secondline2">Publish your passion,your way...</div>
                <div className="loginname2">Register</div>
                <label>Name</label><br/>
                <input type="text" placeholder="firstname lastname" className="inputtag2"/><br/>
                <label>Email id</label><br/>
                <input type="text" placeholder="Test@gmail.com" className="inputtag2"/><br/>
                <label>Password</label><br/>
                <input type="Password" placeholder="Test@123" className="inputtag2"/><br/>
                <button className="buttonlogin2" onClick={navigateTohelloworld}>Register</button>
                </div>
            </div>
           
        </div>
    );
}export default Register;