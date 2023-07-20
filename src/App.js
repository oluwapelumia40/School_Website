import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SLogin from './Auth/Student/SLogin';
import SRegister from './Auth/Student/SRegister';
import TeacherLogin from './Auth/Lecturer/TeacherLogin';
import TeacherRegister from './Auth/Lecturer/TeacherRegister';
import SVerify from './Auth/Student/SVerify';
import SReset from './Auth/Student/SReset';
import SResetNew from './Auth/Student/SResetNew';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Student Route */}
          <Route path="/login" exact element={<SLogin/>}/>
          <Route path="/sregister" exact element={<SRegister/>}/>
          <Route path="/student/:id/verify/:token" exact element={<SVerify/>}/>{/* Based on the url of the mail sent to the client */}
          <Route path="/reset" exact element={<SReset/>}/>
          <Route path="/reset/:id" exact element={<SResetNew/>}/>



          {/* Lecturer Routes */}
          <Route path="/teacherlogin" exact element={<TeacherLogin/>}/>
          <Route path="/teacherregister" exact element={<TeacherRegister/>}/>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
