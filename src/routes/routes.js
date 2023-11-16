import noteController from "../controllers/noteController.js";
import missionController from "../controllers/missionController.js";
import express from "express";

let router = express.Router();

const initAPIRoutes = (app) => {
    router.get("/getAllNotes", noteController.getAllNotes);
    router.get("/getNoteById", noteController.getNoteById);
    router.post("/createNewNote", noteController.createNewNote);
    router.put("/updateNoteById", noteController.updateNoteById);
    router.delete("/deleteNoteById", noteController.deleteNoteById);
    router.get("/getMissionById", noteController.getMissionById);
    router.get("/getAllMissions", missionController.getAllMissions);
    router.post("/createNewMission", missionController.createNewMission);
    router.put("/updateMissionById", missionController.updateMissionById);
    router.delete("/deleteMissionById", missionController.deleteMissionById);
    return app.use("/api", router);
}

export default initAPIRoutes;