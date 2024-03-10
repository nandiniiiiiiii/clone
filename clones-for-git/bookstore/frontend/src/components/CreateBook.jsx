import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../helper/Spinner';
import BackButton from '../helper/BackButton';
import { useNavigate } from 'react-router-dom';

function CreateBook() {
  const [loading,setLoading] = useState(false);
  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [publishYear,setPublishYear] = useState("");
  const [copiesSold,setCopiesSold] = useState(0);
  const navigate = useNavigate();
  const handleSave = () =>{
    const data = {
      title,
      author,
      publishYear,
      copiesSold,
    }
    setLoading(true); 
    axios
      .post('http://localhost:8000/api/v1/book/addbook',data)
      .then(()=>{
        setLoading(false);
        navigate('/')
      })
      .catch((error)=>{
        setLoading(false);
        alert('an error occur please check console');
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title: </label>
          <input 
            type='text'
            placeholder='Enter title'
            onChange={(e)=>setTitle(e.target.value)}
            className='border-2 border-gray-500 p-5 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author: </label>
          <input 
            type='text'
            placeholder='Enter Author'
            onChange={(e)=>setAuthor(e.target.value)}
            className='border-2 border-gray-500 p-5 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Published in: </label>
          <input 
            type='text'
            placeholder='Enter Year of publishing'
            onChange={(e)=>setPublishYear(e.target.value)}
            className='border-2 border-gray-500 p-5 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Number of copies Sold: </label>
          <input 
            type='text'
            placeholder='Enter number of copies sold'
            onChange={(e)=>setCopiesSold(e.target.value)}
            className='border-2 border-gray-500 p-5 w-full'
          />
        </div>
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSave}>
        SAVE
      </button>
    </div>
  )
}

export default CreateBook
