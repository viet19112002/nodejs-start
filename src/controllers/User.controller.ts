import { ObjectId } from "typeorm";
import { UserClass } from "../class/User.class";
import { ConnetDB } from "../ConnectDB";
import { User } from "../entity/User.entity";
import { Request, Response } from "express";


const userRepository = ConnetDB.getRepository(User);

export async function getAllUser(req: Request, res: Response) {
    const users = await userRepository.find();
    return res.send(users);
}

export async function getUserById(req: Request, res: Response) {
    const id = new ObjectId(req.params.id);
    const user = await userRepository.findOne({where: { _id: id }});
    if (!user) return res.status(404).send("not found!");
    return res.send(user);
}

export async function createUser(req: Request, res: Response) {
    const newUser = new UserClass(req.body.deviceId, req.body.macId, req.body.googleId);
    const user = await userRepository.save(newUser);
    return res.send(user);
}

export async function updateUser(req: Request, res: Response) {
    const updateUser = new UserClass(req.body.deviceId, req.body.macId, req.body.googleId);
    const user = await userRepository.update(req.params.id, updateUser);
    return res.send(user);
}

export async function deleteUser(req: Request, res: Response) {
    const user = await userRepository.delete(req.params.id);
    return res.send(user);
}
