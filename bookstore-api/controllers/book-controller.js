import Book from "../models/Book.js"

export const getAllBooks = async (req, res) => {   
    const allBooks = await Book.find({})
   try {
     if (allBooks?.length > 0)
     {
         return res.status(200).json(
             {
                 success : true ,
                 message : 'Books retrieved successfully ' ,
                 books : allBooks,
                 count : allBooks.length
             }
         )
     } else {
         return res.status(404).json(
             {
                 success : false ,
                 message : 'No books found'
             }
         )
     }
   } catch (error) {
        return res.status(500).json({
            message: "An error occurred while retrieving books.",
            error: error.message,
            success : false
        })

   }
}

export const getSingleBookById = async (req, res) => {
   try {
    
    const bookId = req.params.id
    console.log(bookId , 'book id ')
    const bookDetails = await Book.findById(bookId)
    if (bookDetails) {
        return res.status(200).json({
            message : 'Book details retrieved successfully ' ,
            success : true ,
            book : bookDetails
        })
    } else {
        return res.status(404).json({
            message: "Book not found.",
            success : false
        })
    }
    
   } catch (error) {
        return res.status(500).json({
            message: "An error occurred while retrieving the book details.",
            error: error.message,
            success : false
        })
   }
}

export const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body
        const newlyAddedBook = await Book.create(newBookFormData)
        if (newlyAddedBook) {
            return res.status(201).json({
                message : 'Book added successfully ' ,
                success : true ,
                book : newlyAddedBook
            })
        } else {
            return res.status(409).json({
                message: "Failed to add the book.",
                response : newlyAddedBook
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while adding the book.",
            error: error.message
        })
    }
}

export const updateBook = async (req, res) => {
   const bookIdToUpdate = req.params.id
   const updatedBookData = req.body
   try {
       const updatedBook = await Book.findByIdAndUpdate(bookIdToUpdate, updatedBookData, { new: true })
       if (updatedBook) {
           return res.status(200).json({
               message : 'Book updated successfully' ,
               success : true ,
               book : updatedBook
           })
       } else {
           return res.status(404).json({
               message: "Book not found.",
               success : false
           })
       }
   } catch (error) {
       return res.status(500).json({
           message: "An error occurred while updating the book.",
           error: error.message,
           success : false
       })
   }    
}

export const deleteBook = async (req, res) => {
    
    
    try {
       const getCurrentBookId   = req.params.id
       const deletedBook = await Book.findByIdAndDelete(getCurrentBookId)
       console.log(getCurrentBookId , deletedBook , 'id to delete ')
       if (!deletedBook) {
        return res.status(404).json({
            message: "Book not found.",
            success : false
        })
       } 
           return res.status(200).json({
               message : 'Book deleted successfully' ,
               success : true
           })
        
        
    } catch (error) {
        console.log(error , 'error in deleting book')
        return res.status(500).json({
            message: "An error occurred while deleting the book.",
            error: error.message,
            success : false
        })
    }
}

