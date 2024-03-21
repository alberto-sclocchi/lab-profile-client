import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/core/HomePage';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import { AuthProvider } from './components/auth/context/Auth.context';
import ProfilePage from './components/auth/ProfilePage';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/log-in" element={<LogIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/user-profile" element={<ProfilePage />} />
        </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
