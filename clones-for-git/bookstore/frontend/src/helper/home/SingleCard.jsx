import React from 'react'
import { Link } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

function SingleCard({ book }) {
    return (
        <div
            key={book._id}
            className='border-2 border-gray-500 rounded-lg p-4 m-4 relative hover:shadow-xl'
        >
            <h2 className='absolute top-1 right-2 p-4 bg-red-300 rounded-lg'>
                {book.publishYear}
            </h2>
            <h4 className='m-4 text-gray-500'>{book._id}</h4>
            <div className='flex justify-start books-center gap-x-3'>
                <PiBookOpenTextLight className='text-red-300 text-2l' />
                <h2 className='m-2'>{book.title}</h2>
            </div>
            <div className='flex justify-start books-center gap-2'>
                <BiUserCircle className='text-red-300 text-2l' />
                <h2 className='m-2'>{book.author}</h2>
            </div>
            <div className='flex justify-start books-center gap-2 m-4 p-4'>
                <Link to={`/book/details/${book._id}`}>
                    <FaInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/book/edit/${book._id}`}>
                    <FaEdit className='text-2xl text-yellow-800 hover:text-black' />
                </Link>
                <Link to={`/book/delete/${book._id}`}>
                    <MdDelete className='text-2xl text-red-800 hover:text-black' />
                </Link>
            </div>
        </div>
    )
}

export default SingleCard


