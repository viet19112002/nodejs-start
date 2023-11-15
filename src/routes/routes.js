import noteController from "../controllers/noteController.js";
import express from "express";

let router = express.Router();

const initAPIRoutes = (app) => {
    router.get("/getAllNotes", noteController.getAllNotes);
    router.get("/getNoteById", noteController.getNoteById);
    router.post("/createNewNote", noteController.createNewNote);
    router.put("/updateNoteById", noteController.updateNoteById);
    router.delete("/deleteNoteById", noteController.deleteNoteById);
    return app.use("/api", router);
}

export default initAPIRoutes;