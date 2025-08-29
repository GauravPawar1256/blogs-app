import './Loginregister.css';
function Loginregister(){
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
              <div className="Blogssection">
                <div className="firstname">Blogs !</div>
                <div className="secondline">Publish your passion,your way...</div>
                <div className='buttonsection'>
                    <button className='buttonsection1'>Login</button>
                    <button className='buttonsection1'>Register</button>
                </div>
              </div>  
            </div>    
        </div>    
        

    );
}export default Loginregister;