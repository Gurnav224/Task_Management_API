import { Task } from "../models/task.model.js";



export const createTask = async (req, res) => {
    const {title, description, status } = req.body;
    try {
        if(!title){
            return res.status(400).json({error:'title is required'})
        }
        const task = new Task({title, description, status,user:req.user});
         await task.save()
        res.status(201).json({
            message:'new task created successfully',
            task
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error:'failed to create new task'
        })
    }
}

export const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({user:req.user});
        if(tasks.length === 0){
            return res.status(404).json({
                 error:'task not found',
                 tasks:[]
            })
        }
        res.status(200).json({message:'get all tasks',tasks})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'failed to get tasks'})
    }
}



export const upateTask = async (req, res) => {
    const {taskId} = req.params;
    const {title, description, status } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(taskId, {title, description, status}, {new:true});

        if(!task) {
            return res.status(404).json({error:'task not found'})
        }

        res.status(200).json({
            message:'task updated successfully',
            task
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({error:'failed to updated task'})
    }
}

export const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const task = await Task.findByIdAndDelete(taskId);

        if(!task) {
            return res.status(404).json({error:'task not found'})
        }

        res.status(200).json({
            message:"task deleted successfully"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({error:'failed to delete task'})
    }
}