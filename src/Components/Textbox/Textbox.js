import './Textbox.css'
function Textbox(){
    return(
        <div className="background1">
            <div className="header1">
                <div className="headername1">Blogs</div>
               <div>
                <span className="headerlinks1">Gaurav pawar</span>
                <span className="headerlinks1">Log out</span>
                </div>
            </div>
            <div className='titlesection1'>
                <input type='text' placeholder='Title' className='title1'/>
                    
                
                <div>
                    <textarea type='text' placeholder='Description' className='textarea1'/>
                </div>
                <div className='buttonsection12'>
                    <button className='buttonsection1'>Cancel</button>
                    <button className='buttonsection1'>Save</button>
                </div>
            </div>

        </div>    

    );
} export default Textbox;