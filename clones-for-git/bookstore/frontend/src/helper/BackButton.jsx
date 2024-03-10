import React from 'react'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

function BackButton({destination = '/'}) {
  return (
    <div className='flex'>
      <Link 
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <AiOutlineDoubleLeft className='text-2xl' />
    </Link>
    </div>
  )
}

export default BackButton
