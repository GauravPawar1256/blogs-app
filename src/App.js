import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Loginregister from './Components/Loginregister/Loginregister';
import Textbox from './Components/Textbox/Textbox';
import Helloworld from './Components/Helloworld/Helloworld';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Helloworld from './Components/helloworld/helloworld';



function App() {
  return (
    <div>
      {/* <Login/>
      <Register/>
      <Loginregister/>
      <Textbox/>
      <Helloworld/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Loginregister/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/title' element={<Textbox/>}/>
          <Route path='/blogs' element={<Helloworld/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
