import express from 'express';
const router = express.Router();


export const getAll =(req,res)=>{
    res.send("Here are your items ")
}

export const getSingleTask =(req,res)=>{
    res.send("Here is your task ")
}

export const createTasks = (req,res) =>{
    res.json(req.body)
}

export const updateTasks = (req,res) =>{
    res.send("update a task")
}
export const deleteTasks = (req,res) =>{
    res.send("delete a task")
}



