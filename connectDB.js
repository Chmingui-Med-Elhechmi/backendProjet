const mongoose = require('mongoose')
// require('dotenv').config({path:'./.env'});
// MONGO_URL=process.env.MONGO_URL;
MONGO_URL= "mongodb+srv://hamach:hamach@mern-app.wh124.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB=()=>{
    mongoose.connect(MONGO_URL,(err)=>{
        if (err) throw err;
        else 
        console.log('database is connected');
    })
}
module.exports = connectDB