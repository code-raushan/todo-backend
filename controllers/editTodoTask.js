const Todo = require('../models/todoModel');

const editTodoTask = async(req, res)=>{
    try {
        const todoId = req.params.todoId;
        const newTodoTask = await Todo.findByIdAndUpdate(todoId, req.body);

        res.status(201).json({
            success: true,
            message: "task updated successfully"
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = editTodoTask;