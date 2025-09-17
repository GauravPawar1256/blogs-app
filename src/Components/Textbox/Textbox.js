import { useNavigate, useParams } from 'react-router-dom';
import './Textbox.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
function Textbox() {
    const [userBlog, setuserBlog] = useState({ title: "", description: "" })
    const { id } = useParams();
    function handletitle(event) {
        let blog = { ...userBlog }
        blog["title"] = event.target.value;
        setuserBlog(blog)
    }
    function handleDescription(event) {
        let blog = { ...userBlog }
        blog["description"] = event.target.value;
        setuserBlog(blog)
    }

    function handlesave1() {
        const useremail=localStorage.getItem('userEmail')
        console.log(userBlog);
        axios.post('http://localhost:3001/userblog',{...userBlog,
            create_by:useremail,
            created_At: moment().format('YYYY-MM-DD HH:mm:ss')
            
        })
         navigate("/blogs");

    }
    useEffect(() => {
    if (id) {
        axios.get(`http://localhost:3001/userblog/${id}`)
            .then(response => {
                setuserBlog(response.data);
            })
            .catch(err => console.error("error editing blog", err));
    }
}, [id]);

    function handleSave() {
        
        if (id) {
            // Update existing blog
            const userEmail = localStorage.getItem('userEmail');
            axios.put(`http://localhost:3001/userblog/${id}`, userBlog)
                .then((response) => {
                    alert("Blog updated successfully");
                    console.log("blog edited successfully", response.data);

                    navigate("/blogs"); // just navigate, no POST
                })
                .catch(err => console.error(err));
        } else {
            // Create new blog
            handlesave1(); // handles POST
        }
    }



    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login")
    }
    return (
        <div className="background1">
            <div className="header1">
                <div className="headername1">Blogs</div>
                <div>
                    <span className="headerlinks1">{localStorage.getItem('userName')}</span>
                    <span className="headerlinks1" onClick={navigateToLogin}>Log out</span>
                </div>
            </div>
            <div className='titlesection1'>
                <input type='text' placeholder='Title' className='title1' value={userBlog.title} onChange={handletitle} />


                <div>
                    <textarea type='text' placeholder='Description' className='textarea1' value={userBlog.description} onChange={handleDescription} />
                </div>
                <div className='buttonsection12'>
                    <button className='buttonsection1'>Cancel</button>
                    <button className='buttonsection1' onClick={handleSave}>Save</button>
                </div>
            </div>

        </div>

    );
} export default Textbox;