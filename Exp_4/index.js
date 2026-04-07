const mongoose=require("mongoose");

//Connection
mongoose.connect("mongodb://127.0.0.1:27017/awt_mongoose")
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log("MongoDB Error",err));

//Schema
const studentSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        age:{
            type:Number,
        },
        course:{
            type:String,
        },
    },
    {timestamps:true}
);

//Model
const Student=mongoose.model("student",studentSchema);

async function main(){
    try{
        //Insert One
        const student1=await Student.create({
            firstName:"Ronak",
            lastName:"Togadiya",
            email:"ronak@example.com",
            age:21,
            course:"B.Tech"
        });
        console.log("Inserted:",student1);

        //Insert Many
        const students=await Student.insertMany([
            {firstName:"Amit",lastName:"Patel",email:"amit@example.com",age:22,course:"B.Tech"},
            {firstName:"Priya",lastName:"Shah",email:"priya@example.com",age:20,course:"MCA"},
        ]);
        console.log("Inserted Many:",students);

        //Find All
        const allStudents=await Student.find({});
        console.log("All Students:",allStudents);

        //Find One
        const oneStudent=await Student.findOne({firstName:"Ronak"});
        console.log("Find One:",oneStudent);

        //Update One
        const updateResult=await Student.updateOne(
            {firstName:"Ronak"},
            {$set:{age:22}}
        );
        console.log("Update Result:",updateResult);

        //Delete One
        const deleteResult=await Student.deleteOne({firstName:"Priya"});
        console.log("Delete Result:",deleteResult);

        //Final state
        const finalStudents=await Student.find({});
        console.log("Final Students:",finalStudents);

        //Cleanup
        await Student.collection.drop();
        console.log("Collection dropped");

    }catch(err){
        console.log("Error:",err);
    }finally{
        await mongoose.connection.close();
        console.log("Connection closed");
    }
}

main();
