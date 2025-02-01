const mongoose = require("mongoose")


const travelSchema = mongoose.Schema({
    Name:{type:String,required:true},
    Email_id:{type:String,required:true},
    Contact_no:{type:String,required:true},
    Destination:{type:String,required:true}

})


const travel = mongoose.model('travel',travelSchema)


module.exports = travel