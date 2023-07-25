import logo from './logo.svg';
import './App.css';
import SignupPage from './pages/user/signup';
import LoginPage from './pages/user/login';
import HomePage from './pages/user/home';
import ProfileUpdate from './pages/user/profileUpdate';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminLoginPage from './pages/admin/login';
import AdminHomePage from './pages/admin/home';
import AdminUpdatePage from './pages/admin/update';
import AdminAddUser from './pages/admin/addUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/profile-update' element={<ProfileUpdate/>} />
          <Route exact path='/admin' element={<AdminLoginPage/>} />
          <Route exact path='/admin-update' element={<AdminUpdatePage/>} />
          <Route exact path='/admin-addUser' element={<AdminAddUser/>} />
          <Route exact path='/dashboard' element={<AdminHomePage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



