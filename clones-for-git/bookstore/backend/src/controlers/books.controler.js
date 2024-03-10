import { Books } from "../models/books.model.js";

//DISPLAY ALL BOOK
const getAllBooks = async(req,res)=>{
    try {
        const books = await Books.find({});
        return res.status(200).json(books);
    } catch (error) {
        console.log(error.message)
    }
}

//ADD A BOOK
const addBook = async(req,res) =>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear ||
            !req.body.copiesSold
        ){
            return res.status(400).send({
                message: 'All fields required'
            });
        }

        //creating new object
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            copiesSold: req.body.copiesSold
        }

        const book = await Books.create(newBook)
        return res.status(201).send(book)

    } catch (error) {
        console.log(error.message)
        res.status(500)
    }
}

//GET A BOOK(using title)
const getABooks = async(req,res) => {
    try {
        const {_id} = req.params;
        const book = await Books.findById(_id);
        console.log(book)
        // console.log(book)
        if(!book){
            res.status(401).send({
                message: "title not found"
            })
        }
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
}

//UPDATE
const updatebook = async(req,res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear ||
            !req.body.copiesSold
        ){
            return res.status(400).send({
                message: 'All fields required'
            });
        }
        const {_id} = req.params;
        console.log(_id)
        const result = await Books.findByIdAndUpdate(_id,req.body)
        if(!result){
            return res.status(404).json({message: 'Book not find'})
        }
        return res.status(200).send({message: "book updated successfuly"});
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
}

//DELETE BOOK
const deletebook = async(req,res)=>{
    try {
        const {_id} = req.params;
        console.log(_id);
        const result = await Books.findByIdAndDelete(_id);
        console.log(result)
        if(!result){
            return res.status(400).json({message: 'book not found'})
        }
        return res.status(200).send({message: 'book deleted successfuly'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})  
    }
}

export {
    getAllBooks,addBook,getABooks,updatebook,deletebook,
}
