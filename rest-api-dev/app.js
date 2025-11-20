const express = require('express')
const app = express()   

app.use(express.json())

let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]


// Get all books
app.get('/books', (req, res) => {
    res.json({
        success: true,
        data: books
    })
})
 