import { ObjectId } from "mongodb";
import { GroupClass } from "../class/Group.class";
import { ConnetDB } from "../ConnectDB";
import { Group } from "../entity/Group.entity";
import { Request, Response } from "express";
import { ErrorConstant } from "../constants/Error.constant";
import { GroupValidator, UpdateGroupDto } from "../validator/Group.validator";
import { validate } from "class-validator";

const groupRepository = ConnetDB.getRepository(Group);

export async function getAllGroup(req: Request, res: Response) {
    const groups = await groupRepository.find();
    return res.send(groups);
}

export async function getGroupById(req: Request, res: Response) {
    const id = new ObjectId(req.params.id);
    const group = await groupRepository.findOneBy({ _id: id});
    if (!group) return res.status(404).send(ErrorConstant.notFound);
    return res.send(group);
}
export async function createGroup(req: Request, res: Response) {
//     const newGroup = new GroupClass(req.body.groupId, req.body.title);
//     const task = await groupRepository.save(newGroup);
//     return res.send(task);
// }
    const { userId, title } = req.body;
    const groupObj = new GroupValidator(
    userId,
    title
  );

  const errors = await validate(groupObj);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  const group = await groupRepository.save(groupObj);
  return res.send(group);
}

export async function updateGroup(req: Request, res: Response) {
    const { userId, title } = req.body;
    const updateGroup = new UpdateGroupDto(
        userId,
        title
    );
    if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const errors = await validate(updateGroup);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  const user = await groupRepository.update(id, updateGroup);
  return res.send(user);
    // const updategroup = new GroupClass(req.body.userId, req.body.title);
    // const group = await groupRepository.update(req.params.id, updategroup);
    // return res.send(group);
}

export async function deleteGroup(req: Request, res: Response) {
    if (!req.params.id) res.status(400).send("Id is required");
    const id = new ObjectId(req.params.id);
    const group = await groupRepository.delete(id);
    return res.send(group);
}

export function getAllNote(arg0: string, getAllNote: any) {
    throw new Error('Function not implemented.');
}
