import { Router, Application } from 'express';
import * as UserController from '../controllers/User.controller';
import * as DiagramController from '../controllers/Diagram.controller';
import * as TaskController from '../controllers/Task.controller';
import * as GroupController from '../controllers/Group.controller';


const router = Router();

const initAPIRoutes = (app: Application): Application => {
    router.get("/users",UserController.getAllUser);
    router.post("/users",UserController.createUser);
    router.put("/users",UserController.updateUser);
    router.delete("/users",UserController.deleteUser);
    router.get("/diagrams",DiagramController.getAllDiagram);
    router.post("/diagrams",DiagramController.createDiagram);
    router.put("/diagrams",DiagramController.updateDiagram);
    router.delete("/diagrams",DiagramController.deleteDiagram);
    router.get("/tasks",TaskController.getAllTask);
    router.post("/tasks",TaskController.createTask);
    router.put("/tasks",TaskController.updateTask);
    router.delete("/tasks",TaskController.deleteTask);
    router.get("/groups",GroupController.getAllGroup);
    router.post("/groups",GroupController.createGroup);
    router.put("/groups",GroupController.updateGroup);
    router.delete("/groups",GroupController.deleteGroup);
    app.use("/api", router);

    return app;
};

export default initAPIRoutes;