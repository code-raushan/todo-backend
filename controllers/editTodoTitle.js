const Todo = require('../models/todoModel');

const editTodoTitle = async(req,res)=>{
    try {
        const todoId = req.params.todoId;
        const newTodoTitle = await Todo.findByIdAndUpdate(todoId, req.body.title);

        res.status(201).json({
            success: true,
            message: "successfully edited todo title",
            newTodoTitle
        })
    } catch (error) {
        console.log(error.message);
        res.status(402).json({
            success: false,
            message: "failed to edit title of todo"
        })
    }
}
module.exports = editTodoTitle;