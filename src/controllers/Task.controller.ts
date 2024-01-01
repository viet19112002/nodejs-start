import { ObjectId } from "mongodb";
import { TaskClass } from "../class/Task.class";
import { ConnetDB } from "../ConnectDB";
import { Task } from "../entity/Task.entity";
import { Request, Response } from "express";
import { ErrorConstant } from "../constants/Error.constant";

const taskRepository = ConnetDB.getRepository(Task);

export async function getAllTask(req: Request, res: Response) {
    const Tasks = await taskRepository.find();
    return res.send(Tasks);
}

export async function getUserById(req: Request, res: Response) {
    const id = new ObjectId(req.params.id);
    const task = await taskRepository.findOneBy({ _id: id});
    if (!task) return res.status(404).send(ErrorConstant.notFound);
    return res.send(task);
}

export async function createTask(req: Request, res: Response) {
    const newTask = new TaskClass(req.body.userId, req.body.title, req.body.mission, req.body.alertTime, req.body.isCheck, req.body.AlertRepeat);
    const task = await taskRepository.save(newTask);
    return res.send(task);
}

export async function updateTask(req: Request, res: Response) {
    const updateTask = new TaskClass(req.body.userId, req.body.title, req.body.mission, req.body.alertTime, req.body.isCheck, req.body.AlertRepeat);
    const task = await taskRepository.update(req.params.id, updateTask);
    return res.send(task);
}

export async function deleteTask(req: Request, res: Response) {
    const task = await taskRepository.delete(req.params.id);
    return res.send(task);
}
