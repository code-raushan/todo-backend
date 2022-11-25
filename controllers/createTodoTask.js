const Todo = require('../models/todoModel');

const createTodoTask = async(req, res)=>{
    try {
        const todoId = req.params.todoId;
        const todo = await Todo.findById(todoId);
        if(!todo){
            res.status(400).send("no todo found")
        }
        const {text} = req.body;
        todo.tasks.push(text);
        await todo.save();
        res.status(201).json({
            success: true,
            message: "successfully created task",
            todo
        })
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = createTodoTask;