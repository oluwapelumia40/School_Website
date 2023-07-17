import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import SLogin from './Auth/SLogin';
import SRegister from './Auth/SRegister';
import TeacherLogin from './Auth/TeacherLogin';
import TeacherRegister from './Auth/TeacherRegister';
=======
import SLogin from './Auth/Student/SLogin';
import SRegister from './Auth/Student/SRegister';
import TeacherLogin from './Auth/Lecturer/TeacherLogin';
import SVerify from './Auth/Student/SVerify';
import SReset from './Auth/Student/SReset';
import SResetNew from './Auth/Student/SResetNew';
>>>>>>> 177e1c6e74fa0a32f75e5e7c5889faa6f4a3879e

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Student Route */}
          <Route path="/" exact element={<SLogin/>}/>
          <Route path="/sregister" exact element={<SRegister/>}/>
          <Route path="/verify" exact element={<SVerify/>}/>
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
