    import express from 'express'
    import { getProductAnalysis, getProductStats, insertSampleProducts } from '../controller/product-controller.js'
    const router = express.Router()

    router.post('/add' , insertSampleProducts)
    router.get('/getInStockAndGTE100' , getProductStats) // finding products $gte 100 and instock status
    router.get('/getAnalysis', getProductAnalysis) //product analysis  . 
    

    export default router