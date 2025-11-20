const express  = require('express')
const path = require('path')
const { title } = require('process')

const app = express()



//setting the view engine to ejs
app.set('view engine', 'ejs' )

//setting the views directory
app.set('views', path.join(__dirname, 'views'))


const products = [
    {id : 1, title: 'Laptop', price: 1000},
    {id : 2, title: 'Phone', price: 500},
    {id : 3, title: 'Tablet', price: 300}
]

app.get('/', (req, res) => {
    res.render('home', { title: 'homw', message: 'This is the home ', products})
    res.render('about' , { title: 'about' })
})

const port  = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})