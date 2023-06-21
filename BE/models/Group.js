const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Group = new Schema({
    name : { type:String , require:true },
    cccd: {type:String } ,
    acreage: {type:String} ,
    email: {type:String} ,
    phone: {type:String} ,
    address: {type:String},
    region: {Type:String} ,
    /* , startDate: , endDate:, */ 
    slug: { type: String, slug: 'name', unique: true }
})

module.exports = mongoose.model('Group' , Group)

