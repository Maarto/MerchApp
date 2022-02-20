import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home';
import PageNotFound from './pages/notFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
