const { deleteModel } = require('mongoose');
const Todo = require('../models/todoModel');

const deleteTodo = async(req, res)=>{
    try {
        const todoId = req.params.todoId;
        const deletedTodo = await Todo.  findByIdAndDelete(todoId);

        res.status(201).json({
            success: true,
            message: "successfully deleted the todo",
            deletedTodo
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "deleting todo failed"
        })
    }   
}
module.exports = deleteTodo;