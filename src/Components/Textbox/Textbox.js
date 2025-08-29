import './Textbox.css'
function Textbox(){
    return(
        <div className="background">
            <div className="header">
                <div className="headername">Blogs</div>
               <div>
                <span className="headerlinks">Gaurav pawar</span>
                <span className="headerlinks">Log out</span>
                </div>
            </div>
            <div className='titlesection'>
                <div className='title'>
                    Title
                </div>
                <div>
                    <textarea type='text' placeholder='Description' className='textarea'/>
                </div>
                <div className='buttonsection'>
                    <button className='buttonsection1'>Cancel</button>
                    <button className='buttonsection1'>Save</button>
                </div>
            </div>

        </div>    

    );
} export default Textbox;