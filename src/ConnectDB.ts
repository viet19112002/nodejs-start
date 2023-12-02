import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.entity"
import { Task } from "./entity/Task.entity"
import { Note } from "./entity/Note.entity"
import { Group } from "./entity/Group.entity"
import { Diagram } from "./entity/Diagram.entity"

export const ConnetDB = new DataSource({
    type: "mongodb",
    database: "note-backend",
    url: "mongodb+srv://nguyentrongviet19112002:banguoichoi1@cluster0.glry8qh.mongodb.net/?retryWrites=true&w=majority",
    synchronize: true,
    logging: true,
    entities: [User,Task,Note,Group,Diagram],
    migrations: [],
    subscribers: [],
    dropSchema: true
})
