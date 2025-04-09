import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['pending','in-progress','completed']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})


export const Task = mongoose.model('Task', taskSchema);

