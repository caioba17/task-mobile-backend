import express from "express";
import cors from "cors";
import taskController from "./controllers/taskController.js";
import userController from "./controllers/userController.js";
import jwt from "./token.js";

const app = express();

app.use(express.json());
app.use(cors());

//Routes
app.get("/tasks/:user_id", jwt.ValidateJWT, taskController.List);
app.post("/tasks", jwt.ValidateJWT, taskController.Insert);
app.delete("/tasks/:task_id", jwt.ValidateJWT, taskController.Delete);
app.put("/tasks/:task_id", jwt.ValidateJWT, taskController.Edit);
app.put("/tasks/check/:task_id", jwt.ValidateJWT, taskController.Check);
app.put("/tasks/uncheck/:task_id", jwt.ValidateJWT, taskController.Uncheck);
app.post("/users/register", userController.Register);
app.post("/users/login", userController.Login);

app.listen(3001, () => {
  console.log("App running on port - 3001");
});
