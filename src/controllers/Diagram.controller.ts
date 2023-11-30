import { ConnetDB } from "../ConnectDB";
import { Diagram } from "../entity/Diagram.entity";
import { Request, Response } from "express";
import { UserClass } from "../class/User.class";
import { DiagramClass } from "../class/Diagram.class";

const diagramRepository = ConnetDB.getRepository(Diagram);

export async function getAllDiagram(req: Request, res: Response) {
  const diagram = await diagramRepository.find();
  return res.send(diagram);
}

export async function getDiagramById(req: Request, res: Response) {
  const diagram = await diagramRepository.findOne(req.params.id);
  return res.send(diagram);
}

export async function createDiagram(req: Request, res: Response) {
  const newDiagram = new DiagramClass(
    req.body.userId,
    req.body.branchs,
    req.body.title,
    req.body.createdDate
  );
  const diagram = await diagramRepository.save(newDiagram);
  return res.send(diagram);
}

export async function updateDiagram(req: Request, res: Response) {
  const updateDiagram = new UserClass(
    req.body.deviceId,
    req.body.macId,
    req.body.googleId
  );
  const diagram = await diagramRepository.update(req.params.id, updateDiagram);
  return res.send(diagram);
}

export async function deleteDiagram(req: Request, res: Response) {
  const diagram = await diagramRepository.delete(req.params.id);
  return res.send(diagram);
}
