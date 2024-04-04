import { ObjectId } from "mongodb";
import { NoteClass } from "../class/Note.class";
import { ConnetDB } from "../ConnectDB";
import { Note } from "../entity/Note.entity";
import { Request, Response } from "express";
import { HttpError } from "http-error"
import { ErrorConstant } from "../constants/Error.constant";
import { validate } from "class-validator";
import { NoteValidator, UpdateNoteDto } from "../validator/Note.validator";

const noteRepository = ConnetDB.getRepository(Note);

export async function getAllNote(req: Request, res: Response) {
    const notes = await noteRepository.find();
    if (!notes) throw new HttpError.notFound("This project does not exist")
    
    return res.send(notes);
}

export async function getNoteById(req: Request, res: Response) {
  const id = new ObjectId(req.params.id);
  const note = await noteRepository.findOneBy({ _id: id});
  if (!note) return res.status(404).send(ErrorConstant.notFound);
  return res.send(note);
}

export async function createNote(req: Request, res: Response) {
  const { userId, groupId, title, mission, description, record, image, createdAt, alertTime, isHidden, theme } = req.body;
  const noteObj = new NoteValidator(
    userId,
    groupId,
    title,
    mission,
    description,
    record,
    image,
    createdAt,
    alertTime,
    isHidden,
    theme
  );
  const errors = await validate(noteObj);
  const note = await noteRepository.save(noteObj);
  return res.send(note);
}

export async function updateNote(req: Request, res: Response) {
  const { userId, groupId, title, mission, description, record, image, createdAt, alertTime, isHidden, theme } = req.body;
  const updateNote = new UpdateNoteDto(
    userId,
    groupId,
    title,
    mission,
    description,
    record,
    image,
    createdAt,
    alertTime,
    isHidden,
    theme
  );
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const errors = await validate(updateNote);
  if (errors.length > 0) {
    return res.status(400).send(errors);
  }
  const note = await noteRepository.update(id, updateNote);
  return res.send(note);
}

export async function deleteNote(req: Request, res: Response) {
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
    const note = await noteRepository.delete(req.params.id);
    return res.send(note);
}



