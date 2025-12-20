import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/produc-routes.js'
const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error(err)
})

app.use(express.json())
app.use('/api/products' , router)
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})