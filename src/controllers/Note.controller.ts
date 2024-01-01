import { ObjectId } from "mongodb";
import { NoteClass } from "../class/Note.class";
import { ConnetDB } from "../ConnectDB";
import { Note } from "../entity/Note.entity";
import { Request, Response } from "express";
import { HttpError } from "http-error"
import { ErrorConstant } from "../constants/Error.constant";

const noteRepository = ConnetDB.getRepository(Note);

export async function getAllNote(req: Request, res: Response) {
    const notes = await noteRepository.find();
    if (!notes) throw new HttpError.notFound("This project does not exist")
    return res.send(notes);
}

export async function getUserById(req: Request, res: Response) {
  const id = new ObjectId(req.params.id);
  const note = await noteRepository.findOneBy({ _id: id});
  if (!note) return res.status(404).send(ErrorConstant.notFound);
  return res.send(note);
}

export async function createNote(req: Request, res: Response) {
  const newNote = new NoteClass(
    req.body.userId,
    req.body.groupId,
    req.body.title,
    req.body.mission,
    req.body.description,
    req.body.record,
    req.body.image,
    req.body.createdAt,
    req.body.alertTime,
    req.body.isHidden,
    req.body.theme
  );
  const note = await noteRepository.save(newNote as any);
  return res.send(note);
}

export async function updateNote(req: Request, res: Response) {
  const updateNote = new NoteClass(
    req.body.userId,
    req.body.groupId,
    req.body.title,
    req.body.mission,
    req.body.description,
    req.body.record,
    req.body.image,
    req.body.createdAt,
    req.body.alertTime,
    req.body.isHidden,
    req.body.theme
  );
  const note = await noteRepository.update(req.params.id, updateNote as any);
  return res.send(note);
}

export async function deleteNote(req: Request, res: Response) {
    const note = await noteRepository.delete(req.params.id);
    return res.send(note);
}



