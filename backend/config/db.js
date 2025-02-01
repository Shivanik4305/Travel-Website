const mongoose = require('mongoose')

function connect(){
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/travel")
        console.log('database connected successfully 😒😒😒😒😒😒😒')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connect