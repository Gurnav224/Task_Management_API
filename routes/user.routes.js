import express from "express";
import { getUserDetails, login, signup } from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.get('/me', verifyToken,  getUserDetails);
export default router;
