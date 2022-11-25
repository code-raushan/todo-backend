const Todo = require('../models/todoModel');

const deleteTodoTask = async (req, res)=>{
    try {
        const todoId = req.body.todoId;
        const todo = await Todo.findById(todoId);
        const deletedTodoTask = todo.tasks.pop();
        await todo.save();

        res.status(201).json({
            success: true,
            message: "successfully deleted task",
            deleteTodoTask
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "failed to delete task"
        })
    }
}
module.exports = deleteTodoTask