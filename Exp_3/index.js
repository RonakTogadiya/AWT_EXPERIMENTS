const {MongoClient}=require("mongodb");

const url="mongodb://127.0.0.1:27017";
const dbName="awt_experiment";

async function main(){
    const client=new MongoClient(url);

    try{
        await client.connect();
        console.log("Connected to MongoDB");

        const db=client.db(dbName);
        const collection=db.collection("students");

        //Insert One
        const insertResult=await collection.insertOne({
            name:"Ronak",
            age:21,
            course:"B.Tech"
        });
        console.log("Insert One Result:",insertResult);

        //Insert Many
        const insertManyResult=await collection.insertMany([
            {name:"Amit",age:22,course:"B.Tech"},
            {name:"Priya",age:20,course:"MCA"},
            {name:"Rahul",age:23,course:"B.Tech"}
        ]);
        console.log("Insert Many Result:",insertManyResult);

        //Find All
        const allDocs=await collection.find({}).toArray();
        console.log("All Documents:",allDocs);

        //Find One
        const oneDoc=await collection.findOne({name:"Ronak"});
        console.log("Find One:",oneDoc);

        //Update One
        const updateResult=await collection.updateOne(
            {name:"Ronak"},
            {$set:{age:22}}
        );
        console.log("Update Result:",updateResult);

        //Delete One
        const deleteResult=await collection.deleteOne({name:"Rahul"});
        console.log("Delete Result:",deleteResult);

        //Final state
        const finalDocs=await collection.find({}).toArray();
        console.log("Final Documents:",finalDocs);

        //Cleanup - drop collection
        await collection.drop();
        console.log("Collection dropped");

    }catch(err){
        console.log("Error:",err);
    }finally{
        await client.close();
        console.log("Connection closed");
    }
}

main();
