import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../helper/Spinner';
import BackButton from '../helper/BackButton';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteBook() {
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`http://localhost:8000/api/v1/book/deleteBook/${id}`)
    .then((res)=>{
      setLoading(true);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      alert('an error occur please check console');      
      console.log(error);
    })
  }
  return (
    <div className='p-10'>
      <BackButton/>
      <h1 className='text-3xl my-5'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-300 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book ?</h3>
        <button
          className='p-4 bg-red-600 text-white m-10 w-full'
          onClick={handleDelete}
        >
          Yes,Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
