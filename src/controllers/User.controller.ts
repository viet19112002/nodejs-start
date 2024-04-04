import { validate } from "class-validator";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { ConnetDB } from "../ConnectDB";
import { User } from "../entity/User.entity";
import { UpdateUserDto, UserValidator } from "../validator/User.validator";

const userRepository = ConnetDB.getRepository(User);

export async function getAllUser(req: Request, res: Response) {
  const users = await userRepository.find();
  return res.send(users);
}

export async function loginLocal(req: Request, res: Response) {
  const { userName, password } = req.body;
  const user = await userRepository.findOne({ where: { userName, password } });
  if (!user) return res.status(404).send("User not found");
  return res.send(user);
}

export async function getUserById(req: Request, res: Response) {
  const id = new ObjectId(req.params.id);
  const user = await userRepository.findOne({ where: { _id: id } });
  if (!user) return res.status(404).send("This user does not exist");
  return res.send(user);
}

export async function createUser(req: Request, res: Response) {
  const { userName, password, fullName, deviceId, macId, googleId } = req.body;
  const userObj = new UserValidator(
    userName,
    password,
    fullName,
    deviceId,
    macId,
    googleId
  );

  const errors = await validate(userObj);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  const user = await userRepository.save(userObj);
  return res.send(user);
}

export async function updateUser(req: Request, res: Response) {
  const { userName, password, fullName, deviceId, macId, googleId } = req.body;
  const updateUser = new UpdateUserDto(
    userName,
    password,
    fullName,
    deviceId,
    macId,
    googleId
  );
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const checkExist = await userRepository.findOne({ where: { _id: id } });
  if (!checkExist) return res.status(404).send("This user does not exist");
  const errors = await validate(updateUser);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  const user = await userRepository.update(id, updateUser);
  return res.send("Update success!");
}

export async function deleteUser(req: Request, res: Response) {
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const checkExist = await userRepository.findOne({ where: { _id: id } });
  if (!checkExist) return res.status(404).send("This user does not exist");
  const user = await userRepository.delete(id);
  return res.send("Delete success!");
}
