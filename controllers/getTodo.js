const Todo = require('../models/todoModel');

const getTodo = async(req, res)=>{
    try {
        const {todoId}=req.params;
        const todo = await Todo.findById(todoId);
        res.status(201).json({
            success: true,
            message: "successfully got the todo",
            todo
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: true,
            message: error.message
        })
    }
}
module.exports = getTodo;