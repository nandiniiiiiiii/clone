import {Router} from "express";
import { addBook,getABooks,updatebook,deletebook } from "../controlers/books.controler.js";

const Book = Router()
// /api/v1/book/addbook
Book.route('/addbook').post(addBook)
Book.route('/getABook/:_id').get(getABooks)
Book.route('/updateBook/:_id').put(updatebook)
Book.route('/deleteBook/:_id').post(deletebook)

export default Book;