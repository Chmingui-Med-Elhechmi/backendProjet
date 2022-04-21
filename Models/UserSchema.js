const mongoose= require('mongoose')
const usersSchema = new mongoose.Schema({
    CIN : {type : Number, required : true},
    FirstName : {type : String, required : true},
    LastName : {type : String, required : true},
    Email : {type : String, required : true},
    Password : {type : String, required : true},
    Age : {type : Number},
    PhoneNumber : {type : Number},
    role : {type : String, required : true}
})

module.exports = mongoose.model('User',usersSchema);