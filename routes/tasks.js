import express from "express";
const Router = express.Router();
import { getAllTasks } from "../controller/tasks.js";

Router.route('/', getAllTasks);



export default Router;
