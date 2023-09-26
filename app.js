import express  from "express";
import dotenv from 'dotenv';
import { getAll,getSingleTask,deleteTasks,updateTasks,createTasks } from "./controllers/tasks.js";

dotenv.config()
const app = express();

app.use(express.json())
const port = process.env.PORT || 3000;
// the middleware

app.get('/api/v1/tasks',getAll);
app.post('/api/v1/tasks',createTasks);
app.get('/api/v1/tasks/:id',getSingleTask);
app.put('/api/v1/tasks/:id',updateTasks);
app.delete('/api/v1/tasks/:id',deleteTasks);

// a simple route to check the server

app.get('/hello',(req,res)=>{
    res.send("Hello mike your server is running ....")
})

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
})
