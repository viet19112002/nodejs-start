import { ConnetDB } from "../ConnectDB";
import { Diagram } from "../entity/Diagram.entity";
import { Request, Response } from "express";
import { UserClass } from "../class/User.class";
import { DiagramClass } from "../class/Diagram.class";
import { ObjectId } from "mongodb";
import { ErrorConstant } from "../constants/Error.constant";
import { DiagramValidator, UpdateDiagramDto } from "../validator/Diagram.validator";
import { validate } from "class-validator";

const diagramRepository = ConnetDB.getRepository(Diagram);

export async function getAllDiagram(req: Request, res: Response) {
  const diagram = await diagramRepository.find();
  return res.send(diagram);
}

export async function getDiagramById(req: Request, res: Response) {
  const id = new ObjectId(req.params.id);
  const diagram = await diagramRepository.findOneBy({ _id: id});
  if (!diagram) return res.status(404).send(ErrorConstant.notFound);
  return res.send(diagram);
}

export async function createDiagram(req: Request, res: Response) {
  const { userId, branchs, title, createdDate } = req.body;
  const diagramObj = new DiagramValidator(
    userId,
    branchs,
    title,
    createdDate
  );
  const errors = await validate(diagramObj);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  const diagram = await diagramRepository.save(diagramObj);
  return res.send(diagram);
}

export async function updateDiagram(req: Request, res: Response) {
  const { userId, branchs, title, createdDate } = req.body;
  const updateDiagram = new UpdateDiagramDto(
    userId,
    branchs,
    title,
    createdDate
  );
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const errors = await validate(updateDiagram);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }
  const diagram = await diagramRepository.update(id, updateDiagram);
  return res.send(diagram);
}

export async function deleteDiagram(req: Request, res: Response) {
  if (!req.params.id) res.status(400).send("Id is required");
  const id = new ObjectId(req.params.id);
  const diagram = await diagramRepository.delete(id);
  return res.send(diagram);
}
