const bodyParser = require('body-parser');
const express = require('express')
const app = express()

const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb+srv://nguyentrongviet19112002:banguoichoi1@cluster0.glry8qh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client.connect((err , db)=> {
  if (err) throw err;
  console.log("kết nối thành công");
});


const db = client.db("note-app");

// processing for notes collection

async function getAllNotes() {
  const note = await db.collection("notes").find().toArray();
  return note;
} // lấy tất cả các note

async function getNoteById(_id) {
  const note = await db.collection("notes").findOne({ _id: ObjectId(_id) });
  return note;
} // lấy note theo id

async function createNewNote(title,description) {
  const note = await db.collection("notes").insertOne({ title: title, description: description });
  return note;
} // tạo mới 1 note

async function updateNoteById(_id, title, description) {
  const note = await db.collection("notes").updateOne({_id: ObjectId(_id)},{
    $set: {
      title: title,
      description: description,
    },
  });
  return note;
} // update note theo id

async function deleteNoteById(_id) {
  const note = await db.collection("notes").deleteOne({ _id: ObjectId(_id) });
  return note;
} // xóa note theo id

//processing for mission collection
async function getAllMissions(){
  const mission = await db.collection("missions").find({}).toArray();
  return mission;
}
async function getMissionById(_id){
  const mission = await db.collection("missions").findOne({_id: ObjectId(_id)});
  return mission;
}
async function createNewMission(title,state){
  const mission = await db.collection("missions").insertOne({title:title,state:state});
  return mission;
}
async function updateMissionById(_id,title,state){
  const mission = await db.collection("missions").updateOne({_id: ObjectId(_id)},{
    $set: {
      title: title,
      state: state,
    },
  });
  return mission;
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getAllMissions',async function(req,res){
  const result = await getAllMissions();
  res.send(result);
});

app.post('/createNewMission',async function(req,res){
  const result = await createNewMission(req.body.title,req.body.state);
  res.send(result);
});

app.put('/updateMissionById',async function(req,res){
  const result = await updateMissionById(req.boby._id,req.body.title,req,body.state);
  res.send(result);
});

app.delete('/deleteMissionById',async function(req,res){
  const result = await deleteMissionById(req.body._id);
  res.send(result);
  });


app.get('/getAllNotes', async function  (req, res) {
  const result = await getAllNotes(); 
  res.send(result);
});

app.post('/createNewNote',async function (req, res) {
  const result = await createNewNote(req.body.title,req.body.description);
  res.send(result);
});

app.put('/updateNoteById', async function (req, res) {
  const result = await updateNoteById(req.body._id, req.body.title, req.body.description);
  res.send(result);
});

app.delete('/deleteNoteById', async function (req, res) {
  const result = await deleteNoteById(req.body._id);
  res.send(result);
});



app.listen(3000, function () {  
  console.log('Example app listening on port 3000!');
  app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    }
  })
});
