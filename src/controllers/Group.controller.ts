import { GroupClass } from "../class/Group.class";
import { ConnetDB } from "../ConnectDB";
import { Group } from "../entity/Group.entity";
import { Request, Response } from "express";

const groupRepository = ConnetDB.getRepository(Group);

export async function getAllGroup(req: Request, res: Response) {
    const groups = await groupRepository.find();
    return res.send(groups);
}

export async function getGroupById(req: Request, res: Response) {
    const group = await groupRepository.findOne(req.params.id);
    return res.send(group);
}

export async function createGroup(req: Request, res: Response) {
    const newGroup = new GroupClass(req.body.groupId, req.body.title);
    const task = await groupRepository.save(newGroup);
    return res.send(task);
}

export async function updateGroup(req: Request, res: Response) {
    const updategroup = new GroupClass(req.body.userId, req.body.title);
    const group = await groupRepository.update(req.params.id, updategroup);
    return res.send(group);
}

export async function deleteGroup(req: Request, res: Response) {
    const group = await groupRepository.delete(req.params.id);
    return res.send(group);
}
