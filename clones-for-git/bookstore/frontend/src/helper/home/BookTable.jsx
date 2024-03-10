import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function BookTable({book}) {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
        <tr>
            <th className='border border-slate-600 rounded-md'>Number</th>
            <th className='border border-slate-600 rounded-md'>Title</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Copies Sold</th>
            <th className='border border-slate-600 rounded-md'>Operation</th>
        </tr>
    </thead>
    <tbody>
        {
            book.map((book, index) => (
                <tr key={book._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>
                        {index + 1}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        {book.title}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        {book.author}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        {book.publishYear}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        {book.copiesSold}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                            <Link to={`/book/details/${book._id}`}>
                                <FaInfoCircle className='text-2xl text-green-800' />
                            </Link>
                            <Link to={`/book/edit/${book._id}`}>
                                <FaEdit className='ext-2xl text-yellow-800' />
                            </Link>
                            <Link to={`/book/delete/${book._id}`}>
                                <MdDelete className='ext-2xl text-red-800' />
                            </Link>
                        </div>
                    </td>
                </tr>
            ))
        }
    </tbody>
</table>
  )
}

export default BookTable
