import express from 'express'
import { getAllBooks, updateBook, deleteBook, getSingleBookById, addNewBook } from '../controllers/book-controller.js'

const BookRoutes = express.Router()

/**
 * @swagger
 * /api/books/get:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all books
 */
BookRoutes.get('/get', getAllBooks)

/**
 * @swagger
 * /api/books/get/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book found
 *       404:
 *         description: Book not found
 */
BookRoutes.get('/get/:id', getSingleBookById)

/**
 * @swagger
 * /api/books/add:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string 
 *               author:
 *                 type: string
 *               year:
 *                 type: number
 *               
 *     responses:
 *       201:
 *         description: Book created
 */
BookRoutes.post('/add', addNewBook)

/**
 * @swagger
 * /api/books/update/{id}:
 *   put:
 *     summary: You can use this api to update the book contents using the book id . 
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated
 */
BookRoutes.put('/update/:id', updateBook)

/**
 * @swagger
 * /api/books/delete/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted
 */
BookRoutes.delete('/delete/:id', deleteBook)

export default BookRoutes