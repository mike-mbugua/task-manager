import express  from "express";
import { createTasks, deleteTasks, getAll, getSingleTask, updateTasks } from "../controllers/tasks";

const router = express.Router();


router.route('/').get(getAll).post(createTasks);
router.route('/:id').get(getSingleTask).patch(updateTasks).delete(deleteTasks);

export default router;