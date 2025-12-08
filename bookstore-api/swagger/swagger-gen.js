import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'Books API',
    version: '1.0.0',
    description: 'A simple Express Books API'
  },
  host: 'localhost:7000',
  basePath: '/',
  schemes: ['http'],
  tags: [
    { name: 'Books', description: 'Book management API' }
  ],
  definitions: {
    Book: {
      _id: '507f1f77bcf86cd799439011',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel about the American Dream',
      price: 299,
      publishedDate: '1925-04-10'
    }
  }
}

const outputFile = './swagger/swagger-output.json'
const routes = ['./routes/book-routes.js']

swaggerAutogen()(outputFile, routes, doc)