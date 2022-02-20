import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/navbar';
import HomePage from './pages/home';
import PageNotFound from './pages/notFound';

function App() {
  return (
    <Routes>
      # Main Page #
      <Route path='/' element={<HomePage/>}/>
      # NavBar #
      <Route path='/home' element={<NavBar/>} />

      # HomePage #

      # Error 404 #
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
