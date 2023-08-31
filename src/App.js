import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignup from './Auth/LoginSignup';
import { Registration_Page } from './Auth/Registration_Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Student Route */}
          <Route path="/student/login" exact element={<LoginSignup/>}/>
          <Route path="/student/register" exact element={<Registration_Page/>}/>
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
