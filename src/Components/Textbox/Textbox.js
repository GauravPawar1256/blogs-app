import { useNavigate } from 'react-router-dom';
import './Textbox.css'
import { useState } from 'react';
import axios from 'axios';
function Textbox(){
    const [userBlog, setuserBlog]=useState({title:"",description:""})
    function handletitle(event){
        let blog={...userBlog}
        blog["title"]=event.target.value;
        setuserBlog(blog)
    }
    function handleDescription(event){
        let blog={...userBlog}
        blog["description"]=event.target.value;
        setuserBlog(blog)
    }
    function handlesave(){
        console.log(userBlog);
        axios.post('http://localhost:3001/userblog',userBlog)
        navigate("/blogs");
    }
    const navigate =useNavigate();
    const navigateToLogin=()=>{
        navigate("/login")
    }
    return(
        <div className="background1">
            <div className="header1">
                <div className="headername1">Blogs</div>
               <div>
                <span className="headerlinks1">Gaurav pawar</span>
                <span className="headerlinks1" onClick={navigateToLogin}>Log out</span>
                </div>
            </div>
            <div className='titlesection1'>
                <input type='text' placeholder='Title' className='title1' value={userBlog.title} onChange={handletitle}/>
                    
                
                <div>
                    <textarea type='text' placeholder='Description' className='textarea1'value={userBlog.description} onChange={handleDescription}/>
                </div>
                <div className='buttonsection12'>
                    <button className='buttonsection1'>Cancel</button>
                    <button className='buttonsection1' onClick={handlesave}>Save</button>
                </div>
            </div>

        </div>    

    );
} export default Textbox;