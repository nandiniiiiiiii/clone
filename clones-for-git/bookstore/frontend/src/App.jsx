import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {CreateBook,DeleteBook,EditBook,Home,ShowBook} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/book/create' element={<CreateBook/>}></Route>
      <Route path='/book/details/:id' element={ <ShowBook/> }></Route>
      <Route path='/book/edit/:id' element={<EditBook/>}></Route>
      <Route path='/book/delete/:id' element={<DeleteBook/>}></Route>
    </Routes>
  )
}

export default App
