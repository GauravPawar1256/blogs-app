import './Loginregister.css';
import { useNavigate } from "react-router-dom";
function Loginregister() {
    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate("/register")
    }
    const navigateToLogin = () => {
        navigate("/login")
    }
    const navigateToDashboard = () => {
        navigate("/loginregister")
    }
    return (
        <div className="background3">
            <div className="header3">
                <div className="headername3" onClick={navigateToDashboard}>Blogs</div>
                <div>
                    <span className="headerlinks3" onClick={navigateToLogin}>Login</span>
                    <span className="headerlinks3" onClick={navigateToRegister}>Register</span>
                </div>
            </div>
            <div>
                <div className="Blogssection3">
                    <div className="firstname3">Blogs !</div>
                    <div className="secondline3">Publish your passion,your way...</div>
                    <div className='buttonsection10'>
                        <button className='buttonsection3' onClick={navigateToLogin}>Login</button>
                        <div>
                            <button className='buttonsection3' onClick={navigateToRegister}>Register</button></div>
                    </div>
                </div>
            </div>
        </div>


    );
} export default Loginregister;