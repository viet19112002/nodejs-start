const bodyParser = require('body-parser');
const express = require('express')
const app = express()
import initAPIRoutes from './routes/routes';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

initAPIRoutes(app);

// //processing for mission collection
// async function getAllMissions() {
//   const mission = await db.collection("missions").find({}).toArray();
//   return mission;
// }
// async function getMissionById(_id) {
//   const mission = await db.collection("missions").findOne({ _id: ObjectId(_id) });
//   return mission;
// }
// async function createNewMission(title, state) {
//   const mission = await db.collection("missions").insertOne({ title: title, state: state });
//   return mission;
// }
// async function updateMissionById(_id, title, state) {
//   const mission = await db.collection("missions").updateOne({ _id: ObjectId(_id) }, {
//     $set: {
//       title: title,
//       state: state,
//     },
//   });
//   return mission;
// }



// app.get('/getAllMissions', async function (req, res) {
//   const result = await getAllMissions();
//   res.send(result);
// });

// app.post('/createNewMission', async function (req, res) {
//   const result = await createNewMission(req.body.title, req.body.state);
//   res.send(result);
// });

// app.put('/updateMissionById', async function (req, res) {
//   const result = await updateMissionById(req.boby._id, req.body.title, req, body.state);
//   res.send(result);
// });

// app.delete('/deleteMissionById', async function (req, res) {
//   const result = await deleteMissionById(req.body._id);
//   res.send(result);
// });




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
