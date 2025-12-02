import express from 'express'
import dotenv from 'dotenv'
import { connectToDB } from './database/db.js'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 7001

//connection to the database .
connectToDB()

//middleware to parse json data.
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})