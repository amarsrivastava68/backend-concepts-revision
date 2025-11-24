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
            // const   newUser = await User.create({
            //      name: 'aMAR sRIVASTAVA',
            //      email: 'amarsrivastava68@gmail.com',
            //      age: 45,
            //      isActive: false,
            //      tags: ['developer', 'blogger']
            //  });
            //  console.log(newUser)
    
           
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
            // const getLastCreatedUserById = await User.findById('692437116ccf290b4e2914e4');
            // console.log(getLastCreatedUserById, 'see');

    // RETURNING / FINDING ONLY SPECIFIC FIELDS OF THE DOCUMENTS / USER  .

        //METHOD -1
             // const findSpecificFieldsOfDocument = await User.find({} , {age:true , tags:true , _id:false})
            // console.log(findSpecificFieldsOfDocument,'see')
        //METHOD-2
            // const selectedFieldsonly = await User.find({}).select('age tags -_id ')
            // console.log(selectedFieldsonly ,'see')

    //LIMITED NUMBER OF RECORDS FROM DATABASE.
            //const limitedRecords = await User.find().limit(5)
            //console.log(limitedRecords , 'see')

    //LIMITED NUMBER OF RECORDS FROM DATABASE AND SKIP SOME RECORDS.
            // const limitedRecords = await User.find().limit(5).skip(4)
            // console.log(limitedRecords , 'see')

    //SORTING DATA IN ASCENDING ORDER. FOR DESCENDING USE  age:-1 INSTEAD OF age:1.
            // const sortedUsers = await User.find().sort({age:1})
            // console.log(sortedUsers , 'see')

    //COUNT OF TOTAL RECORDS IN DATABASE WHICH ARE ACTIVE .
            //  const countActiveUsers = await User.countDocuments({isActive : true})
            //   console.log(countActiveUsers)

    // FINDING USERS WITH AGE GREATER THAN 30 ($gt)
            // const usersAbove30 = await User.find({ age: { $gt: 30 } });
            // console.log(usersAbove30, 'age > 30');

    // FINDING USERS WITH AGE GREATER THAN OR EQUAL TO 30 ($gte)
            // const usersGte30 = await User.find({ age: { $gte: 30 } });
            // console.log(usersGte30, 'age >= 30');

    // FINDING USERS WITH AGE LESS THAN 30 ($lt)
            // const usersLt30 = await User.find({ age: { $lt: 30 } });
            // console.log(usersLt30, 'age < 30');

    // FINDING USERS WITH AGE LESS THAN OR EQUAL TO 30 ($lte)
            // const usersLte30 = await User.find({ age: { $lte: 30 } });
            // console.log(usersLte30, 'age <= 30');

    // FINDING USERS WITH AGE EQUAL TO 30 ($eq) - explicit operator
            // const usersEq30 = await User.find({ age: { $eq: 30 } });
            // console.log(usersEq30, 'age == 30 (explicit $eq)');

    // FINDING USERS WITH AGE EQUAL TO 30 - shorthand (preferred)
            // const usersExactly30 = await User.find({ age: 30 });
            // console.log(usersExactly30, 'age == 30 (shorthand)');

    // FINDING USERS WITH AGE NOT EQUAL TO 30 ($ne)
            // const usersNe30 = await User.find({ age: { $ne: 30 } });
            // console.log(usersNe30, 'age != 30');

    // FINDING USERS WITH ID  AND DELETING THEM
            // const requiredUser = await User.findByIdAndDelete("6924352d6a90d249ada7cb84")
            // console.log(requiredUser , "see")
    
    //FINDING USERS WITH ID  AND UPDATING THEM ( on putting new:true , we can see the changes in database also on putting new:false it will not show any change in database but still update the document , BOTH new:true and new:false are optional parameters , they have no effect on updating document , will be updated in both cases ).
        //    const updatedUser = await User.findByIdAndUpdate("692437116ccf290b4e2914e4",
        //     {
        //         $set : {age :28},
        //         $push : {tags:"newTag"}
        //     },
        //     {new :true}
        //    )
        //    console.log(updatedUser , "see")

    
    } catch (error) {
        console.error('Error in RunQueryExample:', error);
    }
    finally {
        await mongoose.connection.close();
    }
}

RunQueryExample();