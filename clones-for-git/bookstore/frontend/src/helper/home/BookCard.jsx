import React from 'react'
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function BookCard({ book }) {
    return (
        <div className='grid sm:grid-col-2 lg:grid-col-3 xl:grid-cols-4'>
            {
                book.map((book, index) => (
                    <SingleCard key={book._id} book={book}/>  
                ))
            }
        </div>
    )
}

export default BookCard
