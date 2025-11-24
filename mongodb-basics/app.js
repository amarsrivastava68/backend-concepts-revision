import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://amarsrivastava68_db_user:BdecVwPdaTGGMWYV@cluster0.ybwugpn.mongodb.net/mydatabase').then(() => {
    console.log('Connected to MongoDB');

}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }

});

const User = mongoose.model('User', userSchema);

async function RunQueryExample() {
    try {
        // CREATING A NEW USER
                // const newUser = await User.create({
                //     name: 'Travis person',
                //     email: 'john.doe@example.com',
                //     age: 45,
                //     isActive: false,
                //     tags: ['developer', 'blogger']
                // });

        // FILTER ALL ENTRIES AS PER A PARTICULAR CONDITION

                // const allUsers = await User.find({isActive:false})
                // console.log(allUsers , 'see')


        //FINDING FIRST USER ACCORDING TO CONDITION.

                // const allUsers = await User.findOne({isActive:false})
                // console.log(allUsers , 'see')

        // FINDING LAST CREATED USER USING SORT AND LIMIT METHOD . 

                // const newUser = await User.findOne({ isActive: false });
               // console.log(newUser, 'see');


        // FINDING USERS BY ID 
                // const getLastCreatedUserById = await User.findById(newUser._id);
                // console.log(getLastCreatedUserById, 'see');

        // RETURNING / FINDING ONLY SPECIFIC FIELDS OF THE DOCUMENTS / USER  .

          //METHOD -1
                //  const findSpecificFieldsOfDocument = await User.find({} , {age:true , tags:true , _id:false})
                //  console.log(findSpecificFieldsOfDocument,'see')
          //METHOD-2
            //    const selectedFieldsonly = await User.find({}).select('age tags -_id ')
            //    console.log(selectedFieldsonly ,'see')

        // //LIMITED NUMBER OF RECORDS FROM DATABASE.
        //     const limitedRecords = await User.find().limit(5)
        //     console.log(limitedRecords , 'see')

         //LIMITED NUMBER OF RECORDS FROM DATABASE AND SKIP SOME RECORDS.
            // const limitedRecords = await User.find().limit(5).skip(4)
            // console.log(limitedRecords , 'see')

        //SORTING DATA IN ASCENDING ORDER. FOR DESCENDING USE  age:-1 INSTEAD OF age:1.
            const sortedUsers = await User.find().sort({age:1})
            console.log(sortedUsers , 'see')

    } catch (error) {
        console.error('Error in RunQueryExample:', error);
    }
    finally {
        await mongoose.connection.close();
    }
}

RunQueryExample();