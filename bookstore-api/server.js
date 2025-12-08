import express from 'express'
import dotenv from 'dotenv'
import { connectToDB } from './database/db.js'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import BookRoutes from './routes/book-routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 7001

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API',
            version: '1.0.0',
            description: 'A simple Book API'
        },
        servers: [
            { url: `http://localhost:${PORT}` }
        ]
    },
    apis: ['./routes/*.js'] // Path to your route files
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

// Swagger UI route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


//connection to the database .
connectToDB()

//middleware to parse json data.
app.use(express.json())
app.use('/api/books' , BookRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})