import mongoose from 'mongoose';

 mongoose.connect('mongodb+srv://amarsrivastava68_db_user:BdecVwPdaTGGMWYV@cluster0.ybwugpn.mongodb.net/mydatabase').then(()=> {
    console.log('Connected to MongoDB');
   
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number , 
    isActive: Boolean, 
    tags : [String] ,
    createdAt : { type: Date , default: Date.now }

});

const  User = mongoose.model('User' , userSchema);

async function RunQueryExample() {
    try {
        // // Create a new user
        // const newUser = await  User.create({
        //     name: 'John Doe  d ',
        //     email: 'john.doe@example.com',
        //     age: 30,
        //     isActive: false,
        //     tags: ['developer', 'blogger']
        // }); 

        // filter all according to condition

        //   const allUsers = await User.find({isActive:false})
        // console.log(allUsers , 'see')


        //find first one 

        //   const allUsers = await User.findOne({isActive:false})
        // console.log(allUsers , 'see')

            // find last one

               const newUser = await User.findOne({ isActive: false }).sort({ createdAt: -1 });
        console.log(newUser, 'see');
    
    } catch (error) {
        console.error('Error in RunQueryExample:', error);
    }
    finally{
      await   mongoose.connection.close();
    }
}

RunQueryExample();