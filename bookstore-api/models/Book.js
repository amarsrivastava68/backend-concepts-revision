import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true , 'Title is required '] ,
        trim : true ,
        maxLength : [100 , 'Title cannot exceed 100 characters ']    
    },
    author: {
        type: String,
        required: [true , 'book author is required '],
        trim : true  , 
        maxLength : [100 , ' author cannot exceed 100 characters ']
    },
    year: {
        type: Number,
        required : [true , 'Publication year is required '] ,
        min : [1000 ,'Year cannot be less than 1000'] ,
        max : [new Date().getFullYear() , 'Year cannot be in future ']
    },
    createdAt  : {
        type : Date,
        default : Date.now

    }
 
});

const Book = mongoose.model("Book", bookSchema);

export default Book;