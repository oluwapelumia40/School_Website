import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignup from './Auth/LoginSignup';
import { Registration_Page } from './Auth/Registration_Page';
import Get_Started from './Auth/Get_Started';
import ForgetPassword from './Auth/ForgetPassword';
import VerifyPage from './Auth/VerifyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Student Route */}
          <Route path="/" exact element={<Get_Started/>}/>
          <Route path="/forgetpassword" exact element={<ForgetPassword/>}/>
          <Route path="/verify/page" exact element={<VerifyPage/>}/>

          <Route path="/student/login" exact element={<LoginSignup/>}/>
          <Route path="/student/register" exact element={<Registration_Page/>}/>
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
