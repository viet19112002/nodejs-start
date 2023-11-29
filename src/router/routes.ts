import { Router, Application } from 'express';
import * as UserController from '../controllers/User.controller';

const router = Router();

const initAPIRoutes = (app: Application): Application => {
    router.get("/users",UserController.getAllUser);
    router.post("/users",UserController.createUser);
    router.put("/users",UserController.updateUser);
    router.delete("/users",UserController.deleteUser);
    app.use("/api", router);

    return app;
};

export default initAPIRoutes;