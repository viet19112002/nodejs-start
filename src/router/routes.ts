import express from "express";
import {userController} from "../controllers/User.controller";

let router = express.Router();

const initAPIRoutes = (app) => {
    router.get("/getAllNotes", userController.getAllNotes);
    return app.use("/api", router);
}

export default initAPIRoutes;