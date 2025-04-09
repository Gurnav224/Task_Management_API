import express from 'express';
import verifyToken from '../middlewares/verifyToken.js'
import { createTask, deleteTask, getAllTask, upateTask } from '../controllers/task.controller.js';
const router = express();



router.get('/', verifyToken, getAllTask);
router.post('/', verifyToken, createTask);
router.put('/:taskId', verifyToken, upateTask);
router.delete('/:taskId', verifyToken , deleteTask)

export default router;