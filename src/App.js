import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/core/HomePage';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/log-in" element={<LogIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
