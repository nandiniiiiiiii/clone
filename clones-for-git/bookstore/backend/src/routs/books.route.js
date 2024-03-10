import {Router} from "express";
import { getAllBooks,addBook,getABooks,updatebook,deletebook } from "../controlers/books.controler.js";

const Book = Router()
// /api/v1/book/addbook
Book.route('/books').get(getAllBooks)
Book.route('/addbook').post(addBook)
Book.route('/getABook/:_id').get(getABooks)
Book.route('/updateBook/:_id').put(updatebook)
Book.route('/deleteBook/:_id').delete(deletebook)

export default Book;