import express from 'express'
import { getAllBooks  , updateBook , deleteBook , getSingleBookById  , addNewBook} from '../controllers/book-controller.js'

const BookRoutes = express.Router()

//all routes related to books will be here  

BookRoutes.get('/get', getAllBooks) // IF WE ARE USING QUERY PARAM , NO NEED TO DECLARE GET/:ID IN ROUTE
                                    // WE CAN JUST USE GET WITH QUERY PARAMS IN CONTROLLER
BookRoutes.get('/get/:id', getSingleBookById)
    
BookRoutes.post('/add', addNewBook)
BookRoutes.put('/update/:id', updateBook)
BookRoutes.delete('/delete/:id', deleteBook)

export default BookRoutes