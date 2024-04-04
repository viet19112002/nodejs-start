import { ObjectId } from "mongodb";
import { TaskClass } from "../class/Task.class";
import { ConnetDB } from "../ConnectDB";
import { Task } from "../entity/Task.entity";
import { Request, Response } from "express";
import { ErrorConstant } from "../constants/Error.constant";
import { validate } from "class-validator";
import { TaskValidator } from "../validator/Task.validator";

const taskRepository = ConnetDB.getRepository(Task);

export async function getAllTask(req: Request, res: Response) {
  const Tasks = await taskRepository.find();
  return res.send(Tasks);
}

export async function getTaskById(req: Request, res: Response) {
  try {
    if (!req.params.id) res.status(400).send("Id is required");
    const id = new ObjectId(req.params.id);
    const task = await taskRepository.findOneBy({ _id: id });
    if (!task) return res.status(404).send(ErrorConstant.notFound);
    return res.send(task);
  } catch (error) {
    throw new Error(error);
  }
}

export async function createTask(req: Request, res: Response) {
  const { userId, title, mission, alertTime, isCheck, AlertRepeat } = req.body;
  const taskobj = new TaskValidator(
    userId,
    title,
    mission,
    alertTime,
    isCheck,
    AlertRepeat
  );

  const errors = await validate(taskobj);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  const task = await taskRepository.save(taskobj);
  return res.send(task);
}

export async function updateTask(req: Request, res: Response) {
  const { userId, title, mission, alertTime, isCheck, AlertRepeat } = req.body;
  const updateTask = new TaskClass(
    userId,
    title,
    mission,
    alertTime,
    isCheck,
    AlertRepeat
  );
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const errors = await validate(updateTask);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }
  const task = await taskRepository.update(id, updateTask);
  return res.send(task);
}

export async function deleteTask(req: Request, res: Response) {
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const task = await taskRepository.delete(id);
  return res.send(task);
}
