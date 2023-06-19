import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SLogin from './Auth/SLogin';
import SRegister from './Auth/SRegister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SLogin/>}/>
          <Route path="/sregister" exact element={<SRegister/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
