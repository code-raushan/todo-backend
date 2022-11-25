const Todo = require('../models/todoModel');

const getTodos = async(req, res)=>{
    try {
        const todos = await Todo.find();
        res.status(201).json({
            success: true,
            message: "got all todos successfully",
            todos
        })
    } catch (error) {
        console.log(err.message);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
};
module.exports = getTodos;