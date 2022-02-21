import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/navbar';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import PageNotFound from './pages/notFound';
import RegisterPage from './pages/register';

function App() {
  return (
    <Routes>
      # Main Page #
      <Route path='/' element={<HomePage/>}/>
      # NavBar #
      <Route path='/home' element={<NavBar/>} />

      # Auth #

      # Register
      <Route path='/auth/register' element={<RegisterPage/>}/>
      # Login
      <Route path='/auth/login' element={<LoginPage/>}/>


      # HomePage #

      # Error 404 #
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
