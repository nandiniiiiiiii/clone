import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../helper/Spinner';
import BackButton from '../helper/BackButton';

function ShowBook() {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  console.log(id)

  useState(()=>{
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/v1/book/getABook/${id}`)
      .then((res)=>{
        setBook(res.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      })
  },[])

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book</h1><p/>
      {
        loading ? (
          <Spinner/>
        ) : (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-10 m-10'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>ID</span>
              <span>{book._id}</span>
            </div>
            <div>
              <span className='text-xl mr-4 text-gray-500'>Title</span>
              <span>{book.title}</span>
            </div>
            <div>
              <span className='text-xl mr-4 text-gray-500'>Author</span>
              <span>{book.author}</span>
            </div>
            <div>
              <span className='text-xl mr-4 text-gray-500'>Published Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div>
              <span className='text-xl mr-4 text-gray-500'>copies Sold</span>
              <span>{book.copiesSold}</span>
            </div>
            <div>
              <span className='text-xl mr-4 text-gray-500'>Create Time</span>
              {/* <span>{new Data(book.createdAt).toString()}</span> */}
              <span>{book.createdAt}</span>
            </div>
            <div>
              <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
              {/* <span>{new Data(book.updatedAt).toString()}</span> */}
              <span>{book.updatedAt}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowBook
