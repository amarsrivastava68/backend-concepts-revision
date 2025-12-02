import mongoose, { connect } from 'mongoose'

export const connectToDB = async () => {
    try{
       
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')
    } catch(err){
        console.log("Error connecting to DB")
        console.error(err)
        exit(1)
    }
}
