const mongoose = require('mongoose')
async function connect(){
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect('mongodb://127.0.0.1/Test_Nodejs_21_02')
        console.log("Succesfully")
    } catch (error) {
        console.log("Connect Error")
    }
}
module.exports = { connect }