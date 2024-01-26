const Task = require("../model/taskModel");

// A controller to create a task
const createTask = async(req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
       } catch (error) {
        res.status(500).json({msg: error.message})
       }
}

// Controller to get or read all tasks
const getALLTasks = async(req, res) =>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
// Controller to get a task
const getTask = async(req, res) =>{
    try {
        const  {id} = req.params
        const task = await Task.findById(id)
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

//  Controller to a Delete Task
const deleteTask = async(req, res) =>{
 try {
    const {id} = req.params
    const task = await Task.findByIdAndDelete(id)
    if(!task){
        return res.status(404).json(`No task with id: ${id}`)
    }

    res.status(200).send("Task deleted ")
 } catch (error) {
    res.status(500).json({msg: error.message})
 }
}

// controller to update a task
const updateTask = async(req, res)=>{
    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {
                new: true,
                runValidators: true,
            }
        )
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createTask,
    getALLTasks,
    getTask,
    deleteTask,
    updateTask
}