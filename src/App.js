import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SLogin from './Auth/SLogin';
import SRegister from './Auth/SRegister';
import TeacherLogin from './Auth/TeacherLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SLogin/>}/>
          <Route path="/sregister" exact element={<SRegister/>}/>
          <Route path="/teacherlogin" exact element={<TeacherLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
