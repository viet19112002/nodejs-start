import { Router, Application } from "express";
import * as UserController from "../controllers/User.controller";
import * as DiagramController from "../controllers/Diagram.controller";
import * as TaskController from "../controllers/Task.controller";
import * as GroupController from "../controllers/Group.controller";
import * as NoteController from "../controllers/Note.controller";


const router = Router();

const initAPIRoutes = (app: Application): Application => {
  router.get("/users", UserController.getAllUser);
  router.get("/users/:id", UserController.getUserById);
  router.post("/users/login", UserController.loginLocal);
  router.post("/users", UserController.createUser);
  router.put("/users/:id", UserController.updateUser);
  router.delete("/users/:id", UserController.deleteUser);
  router.get("/diagrams", DiagramController.getAllDiagram);
  router.get("/diagrams/:id", DiagramController.getDiagramById);
  router.post("/diagrams", DiagramController.createDiagram);
  router.put("/diagrams/:id", DiagramController.updateDiagram);
  router.delete("/diagrams:id", DiagramController.deleteDiagram);
  router.get("/tasks", TaskController.getAllTask);
  router.get("/tasks/:id", TaskController.getTaskById);
  router.post("/tasks", TaskController.createTask);
  router.put("/tasks/:id", TaskController.updateTask);
  router.delete("/tasks/:id", TaskController.deleteTask);
  router.get("/groups", GroupController.getAllGroup);
  router.get("/groups/:id", GroupController.getGroupById);
  router.post("/groups", GroupController.createGroup);
  router.put("/groups", GroupController.updateGroup);
  router.delete("/groups", GroupController.deleteGroup);
  router.get("/notes", NoteController.getAllNote);
  router.get("/notes/:id", NoteController.getNoteById);
  router.post("/notes", NoteController.createNote);
  router.put("/notes", NoteController.updateNote);
  router.delete("/notes", NoteController.deleteNote);
  app.use("/api", router);

  return app;
};

export default initAPIRoutes;
