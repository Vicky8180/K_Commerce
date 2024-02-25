const mongoose=require('mongoose')

const MongoPass= "vyadav99x1";

var mongoURL=`mongodb+srv://vyadav99x1:${MongoPass}@cluster0.mlxw08h.mongodb.net/`


   mongoose.connect(mongoURL,
    {
        // useNewUrlParser:true ,
        // useUnifiedTopology: true,
        bufferCommands: false})
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log("  ")
})
connection.on('connected' , ()=>{
   console.log("Mongo is running")
})
module.exports =mongoose;

