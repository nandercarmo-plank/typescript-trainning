import { Router } from "express";
import UserController from "./controller/UserController";

const route = Router();

route.get('/users', UserController.index);
route.post('/users', UserController.create);

export default route;