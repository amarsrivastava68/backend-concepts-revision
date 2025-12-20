import Product from '../models/Product.js';
import products from '../productsData.js';

export const getProductStats = async(req,res)=>{
    try {
        //filtering products which are price > 100 and instock is true
        const result = await Product.aggregate([
              { $match : 
               {  price : { $gte : 100} , 
               inStock : true } } ,

               { $group: 

              {  _id: "$category" , 
                avgPrice : { $avg  :  "$price"}, 
                totalValue : {$sum : "$price"} ,
                count : { $sum : 1 }    
            
            }
        }
        ])
           
        

        res.status(200).json({
            message:'Product Stats',
            success:true,
            length : result.length,
            data:result 
            
        }
        )
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:"Error getting product stats"
        })
        
    }

}

export const getProductAnalysis = async(req , res) => {
    try {


        const result = await Product.aggregate([
            { $match : { 
                category : "Electronics"
            }}
        ])

        res.status(200).json({status : true , data : result })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message : "SOME ERROR OCCOURED ",
            success : false ,
            
        })
    }
}
export const insertSampleProducts = async (req , res) => {

    try {
        const result = await Product.insertMany(products);
        res.status(201).json({
            message: `Inserted ${result.length} products`,
            success:true , 
            data:result 
        })
    } catch (error) {

        console.log(error)
        res.status(500).json({
            message: 'Error inserting sample products'
        }); 
        
    }

}

