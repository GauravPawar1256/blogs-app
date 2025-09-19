import './Helloworld.css'
import {useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";  
import { useState } from 'react';
function Helloworld() {
    const [blogs, setBlogs]=useState();
    const [username, setUsername]=useState();
    const [email, setEmail]=useState();
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
    
    function getJsonData() {
    axios.get("http://localhost:3001/userblog")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }
        useEffect(() => {
        axios.get("http://localhost:3001/userblog")
            .then((response) => {
                setBlogs(response.data.blogs || response.data); 
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    function handleDeleteBlog(id) {
  axios.delete(`http://localhost:3001/userblog/${id}`)
    .then(() => {
      alert("Blog deleted successfully!");
       getJsonData();
    })
    .catch((error) => {
      console.error("Error deleting blog:", error);
    });
    }

    const handleLike = (id, likes) => {
  axios.patch(`http://localhost:3001/userblog/${id}`, { likes: likes + 1 })
    .then(() => {
      getJsonData();
    })
    .catch(error => {
      console.error("Error updating likes", error);
    });
};

const handleDisLike = (id, dislikes) => {
  axios.patch(`http://localhost:3001/userblog/${id}`, { dislikes: dislikes + 1 })
    .then(() => {
      getJsonData();
    })
    .catch(error => {
      console.error("Error updating dislikes", error);
    });
};

        

    return (

        <div className="background78">
            <div className="header">
                <div className="headername">Blogs</div>
                <div>
                    <span className="headerlinks">{localStorage.getItem('userName')}</span>
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
            {blogs?.map((singleElement) => (
            <div className='blogssectionbox'>
                
                <div className='blogssection'>
                    <div className='blogtitle' key={singleElement.id}> {singleElement.title} </div>
                    <div><strong>Created By:</strong><i> {singleElement.create_by}</i></div>
                    <div><strong>Created At:</strong> {singleElement.created_At}</div>
                    <hr className='hrline'></hr>
                    <div className='maininfotext'>{singleElement.description}</div>
               
           
                <div className='buttonssection'>
                    <div>
                        <span><button className='buttonsicons'onClick={() => handleLike(singleElement.id, singleElement.likes)}><i class="fa fa-thumbs-up" aria-hidden="true" ></i>{singleElement.likes}</button></span>
                        <span><button className='buttonsicons12'onClick={() => handleDisLike(singleElement.id, singleElement.dislikes)}><i class="fa fa-thumbs-down" aria-hidden="true" ></i>{singleElement.dislikes}</button></span>
                    </div>
                     {singleElement.create_by===localStorage.getItem("userEmail")?(<div>
                     
                        
                        <span><button className='buttonsicons'onClick={() => navigate(`/title/${singleElement.id}`)}>Edit <i class="fa fa-pencil" aria-hidden="true"></i></button></span>
                        <span><button className='buttonsicons12' onClick={() => handleDeleteBlog(singleElement.id)}>Delete <i class="fa fa-trash-o" aria-hidden="true"></i></button></span>
                      </div>):null}
                </div> 
                </div>
            </div>
                 ))}

        </div>

    );
} export default Helloworld;