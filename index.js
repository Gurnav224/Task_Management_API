import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middlewares/globalError.js";
import initializeDatabase from "./config/db.js";
import { config } from "dotenv";
import userRouter from './routes/user.routes.js';
import taskRouter from './routes/task.routes.js';

const app = express();

config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

if (process.argv[2] === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send(`<h1>Task Management API Server is running`);
});

app.use('/auth', userRouter);
app.use('/task',taskRouter)

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

async function runApp() {
  try {
    await initializeDatabase(); 
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error)
    process.exit(1);

  }
}

runApp();
