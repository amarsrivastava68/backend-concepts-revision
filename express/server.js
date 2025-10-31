 const express = require('express');
 const app = express();
 const port = 3000;

 app.get('/products/:id', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Smartphone', price: 699 },
        { id: 3, name: 'Tablet', price: 499 }
    ];
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
 });

 app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
 });

 app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Smartphone', price: 699 },
        { id: 3, name: 'Tablet', price: 499 }
    ];
    res.send(products);
 });
    


 app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
 });
