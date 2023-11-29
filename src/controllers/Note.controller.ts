import { NoteClass } from "../class/Note.class";
import { ConnetDB } from "../ConnectDB";
import { Note } from "../entity/Note.entity";
import { Request, Response } from "express";


const noteRepository = ConnetDB.getRepository(Note);

export async function getAllNote(req: Request, res: Response) {
    const notes = await noteRepository.find();
    return res.send(notes);
}

export async function getNoteById(req: Request, res: Response) {
    const note = await noteRepository.findOne(req.params.id);
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



