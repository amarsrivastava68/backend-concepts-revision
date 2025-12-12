
import express from "express";


const homeRoutes = express.Router()

homeRoutes.get('/home', (req, res) => {
    res.status(200).json({ message: "Welcome to the Home Page!" });
});

export default homeRoutes;
