import  ObjectId  from "mongodb";
import db from "../config/database";
let getAllMissions = async (req, res) => {
    try {
        const mission = await db.collection("Missions").find().toArray();
        return res.status(200).json(mission);
    } catch (error) {
        return error;
    }
}
//hàm trên 
let getMissionById = async (req, res) => {
    var _id = req.query.id; 
    const mission = await db.collection("Missions").findOne({ _id: ObjectId(_id) }); // 
    return res.status(200).json(mission);
} 
// giải thích ý nghĩa hàm trên 

let createNewMission = async (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    const mission = await db.collection("Mission").insertOne({ title: title, description: description });
    return res.status(200).json(mission);
}

let updateMissionById = async (req, res) => {
    var _id = req.query.id;
    var title = req.body.title;
    var description = req.body.description;
    const mission = await db.collection("Mission").updateOne({ _id: ObjectId(_id) }, {
        $set: {
            title: title,
            description: description,
        },
    });
    return res.status(200).json(mission);
}

let deleteMissionById = async (req, res) => {
    var _id = req.query.id;
    const mission = await db.collection("Mission").deleteOne({ _id: ObjectId(_id) });
    return res.status(200).json(mission);
}

module.exports = {
    getAllMissions: getAllMissions,
    getMissionById: getMissionById,
    createNewMission: createNewMission,
    updateMissionById: updateMissionById,
    deleteMissionById: deleteMissionById,
}