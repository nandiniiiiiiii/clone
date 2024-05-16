import React from 'react'
import {Routes, Route ,BrowserRouter,} from 'react-router-dom';
import {Chat,Login,Register,Logout} from './pages/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/' element={<Chat/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
