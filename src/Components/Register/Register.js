import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [userDataofRegister, setuserDataofRegister] = useState({
    userName: "",
    email_id: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleUserName(event) {
    let user={...userDataofRegister}
    user["userName"]=event.target.value;
    setuserDataofRegister(user);
  }

  function handleemail_id(event) {
    let user={...userDataofRegister}
    user["email_id"]=event.target.value;
    setuserDataofRegister(user);
  }

  function handlepassword(event) {
   let user={...userDataofRegister}
    user["password"]=event.target.value;
    setuserDataofRegister(user);
  }

 
  function navigateTohelloworld() {
  console.log(userDataofRegister);
  if (!userDataofRegister.userName || !userDataofRegister.email_id || !userDataofRegister.password) {
    alert("Please enter all fields");
    return;
  }

  axios.post("http://localhost:3001/user", userDataofRegister)
    .then(() => {
      navigate("/login");
    })
    .catch((error) => {
      console.error("Error registering user:", error);
    });
}



  return (
    <div className="background2">
      <div className="header2">
        <div className="headername2" onClick={() => navigate("/")}>Blogs</div>
        <div>
          <span className="headerlinks2" onClick={() => navigate("/login")}>Login</span>
          <span className="headerlinks2" onClick={() => navigate("/register")}>Register</span>
        </div>
      </div>

      <div className="loginsection2">
        <div className="firstname2">Blogs</div>
        <div className="secondline2">Publish your passion, your way...</div>
        <div className="loginname2">Register</div>

        <label>Name</label><br/>
        <input
          type="text"
          placeholder="firstname lastname"
          className="inputtag2"
          value={userDataofRegister.userName}
          onChange={handleUserName}
        /><br/>

        <label>Email id</label><br/>
        <input
          type="text"
          placeholder="Test@gmail.com"
          className="inputtag2"
          value={userDataofRegister.email_id}
          onChange={handleemail_id}
        /><br/>

        <label>Password</label><br/>
        <input
          type="Password"
          placeholder="Test@123"
          className="inputtag2"
          value={userDataofRegister.password}
          onChange={handlepassword}
        /><br/>

        <button className="buttonlogin2" onClick={navigateTohelloworld}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
