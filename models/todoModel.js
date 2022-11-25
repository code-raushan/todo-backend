const mongoose = require('mongoose')
const {Schema}=mongoose;
const TodoSchema= new Schema({
    title: String,
    tasks: [String]
})
module.exports = mongoose.model("Todo", TodoSchema)