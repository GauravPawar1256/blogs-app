import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Resister';
import Loginregister from './Components/Loginregister/Loginregister';
import Textbox from './Components/Textbox/Textbox';


function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <Loginregister/>
      <Textbox/>
    </div>
  );
}

export default App;
