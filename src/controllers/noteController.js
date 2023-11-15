import ObjectId from "mongodb";
import db from "../config/database";


let getAllNotes = async (req, res) => {
    try {
        const note = await db.collection("notes").find().toArray();
        return res.status(200).json(note);
    } catch (error) {
        return error;
    }
}

let getNoteById = async (req, res) => {
    var _id = req.query.id; // có 2 kieu (param query) body
    const note = await db.collection("notes").findOne({ _id: ObjectId(_id) });
    return res.status(200).json(note);
} // lấy note theo id

let createNewNote = async (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    const note = await db.collection("notes").insertOne({ title: title, description: description });
    return res.status(200).json(note);
} // tạo mới 1 note

let updateNoteById = async (req, res) => {
    var _id = req.query.id;
    var title = req.body.title;
    var description = req.body.description;
    const note = await db.collection("notes").updateOne({ _id: ObjectId(_id) }, {
        $set: {
            title: title,
            description: description,
        },
    });
    return res.status(200).json(note);
} // update note theo id

let deleteNoteById = async (req, res) => {
    var _id = req.query.id;
    const note = await db.collection("notes").deleteOne({ _id: ObjectId(_id) });
    return res.status(200).json(note);
} // xóa note theo id

module.exports = {
    getAllNotes: getAllNotes,
    getNoteById: getNoteById,
    createNewNote: createNewNote,
    updateNoteById: updateNoteById,
    deleteNoteById: deleteNoteById,
}