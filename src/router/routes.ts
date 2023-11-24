import express from "express";

let router = express.Router();

const initAPIRoutes = (app) => {
    router.get("/getAllNotes", noteController.getAllNotes);
    return app.use("/api", router);
}

export default initAPIRoutes;