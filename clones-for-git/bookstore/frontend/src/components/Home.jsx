import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../helper/Spinner';
import { AiFillPlusSquare } from "react-icons/ai";
import BookTable from '../helper/home/BookTable';
import BookCard from '../helper/home/BookCard';

function Home() {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState([]);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:8000/api/v1/book/books')
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-500 p-2 h-10 w-60 rounded-lg'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className='bg-sky-300 hover:bg-sky-500 p-2 h-10 w-60 rounded-lg'
                    onClick={() => setShowType('Card')}
                >
                    card
                </button>
            </div>
            <div className="flex justify-between items-center ">
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/book/create'>
                    <AiFillPlusSquare className='text-sky-800 text-4xl ' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                showType === "table" ?
                    (<BookTable book={book} />) :
                    (<BookCard book={book} />)
            )
            }
        </div>
    )
}

export default Home
