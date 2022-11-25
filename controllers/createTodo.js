const Todo = require('../models/todoModel');

const createTodo = async(req,res)=>{
    try{
        const newTodo = new Todo({
            title: req.body.title
        });
        if(!title){
            throw new Error("Title is required")
        };
        const createdNewTodo = await newTodo.save();
        res.status(201).json({
            success: true,
            message: "todo created successfully",
            createdNewTodo
        })
    }catch(err){
        console.log(err.message);
    }
}
module.exports = createTodo;