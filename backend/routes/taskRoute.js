const express = require("express")
const Task = require("../model/taskModel")
const { createTask, getALLTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController")
const router = express.Router()

// router.route("/").get(getALLTasks).post(createTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

// Create A Task
router.post("/", createTask)

 // Get/Read Tasks
router.get("/", getALLTasks)

 // Get/Read Tasks
router.get("/:id", getTask)

 // Delete Task
router.delete("/:id", deleteTask)

 // Update Task
router.put("/:id", updateTask)

module.exports = router