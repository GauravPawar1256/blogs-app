import './Helloworld.css'
import {useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";  
import { useState } from 'react';
function Helloworld() {
    const [blogs, setBlogs]=useState();
     const navigate =useNavigate();
     const navigateTonewpost=()=>{
        navigate("/title")
     }
     const navigateToRegister=()=>{
        navigate("/register")
     }
    // const data = [
    //     {
    //         title: "HelloWorld",
    //         Created_By: "pawargaurav@gmail.com",
    //         Created_At: "5th sep,2025",
    //         Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    //     }];
        useEffect(() => {
        axios.get("http://localhost:3001/userblog")
            .then((response) => {
                setBlogs(response.data.blogs || response.data); // Adjust depending on API shape
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);
        

    return (

        <div className="background">
            <div className="header">
                <div className="headername">Blogs</div>
                <div>
                    <span className="headerlinks">Gaurav Pawar</span>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <span className="headerlinks" onClick={navigateToRegister}>Register</span>
                </div>
            </div>
            <div className='firstsection'>
                <div><div className='name1'>Blogs</div>
                    <div>Publish your passions,your way...</div>
                </div>
                <div>
                    <button className='createbutton' onClick={navigateTonewpost}><i class="fa fa-plus-circle" aria-hidden="true"></i> Create New Post</button>
                </div>
            </div>
            {blogs.length!==0 && blogs.map((singleElement) => (
            <div className='blogssectionbox'>
                
                <div className='blogssection'>
                    <div className='blogtitle'> {singleElement.title} </div>
                    <div><strong>Created By:</strong> {singleElement.Created_By}</div>
                    <div><strong>Created At:</strong> {singleElement.Created_At}</div>
                    <hr className='hrline'></hr>
                    <div>{singleElement.description}</div>
               
           
                <div className='buttonssection'>
                    <div>
                        <span><button className='buttonsicons'><i class="fa fa-thumbs-up" aria-hidden="true"></i></button></span>
                        <span><button className='buttonsicons'><i class="fa fa-thumbs-down" aria-hidden="true"></i></button></span>
                    </div>
                    <div>
                        <span><button className='buttonsicons'>Edit <i class="fa fa-pencil" aria-hidden="true"></i></button></span>
                        <span><button className='buttonsicons'>Delete <i class="fa fa-trash-o" aria-hidden="true"></i></button></span>
                    </div>
                </div> 
                </div>
            </div>
                 ))}

        </div>

    );
} export default Helloworld;