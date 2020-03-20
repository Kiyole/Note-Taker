const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require('path');
let notes = require("../db/db.json");

function getData(){
let notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8')
return JSON.parse(notes);
}
//getData();

router.get("/api/notes", function(req, res){
    res.json(getData());
})

router.post("/api/notes", function(req, res){
    //let newNote = req.body;
    
    let note = req.body;
    if(test = true){
        req.body.id = 1
        console.log(note.length);
        console.log(note);
        
        //write;
    } else {
        let lastID = note.id + 1
        req.body.id = parseInt(lastID)
        console.log(req.body.id);
        console.log(lastID);
        //write;
    }
    //notes.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    console.log(req.body);
    //notes.push(req.body);
    
    //path/name of file db.json
    //content notes (stringify)
    res.json(getData);
})

router.delete('/api/notes/:_id', function (req, res){
    
    let ID = req.params._id;
    let newNotes = notes.filter(function (e){
       return e.id != ID ;
        
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes))
    res.json(getData);
    console.log(ID)
    console.log(newNotes)
    

 });
 
 //  notes.remove(id, function (err, notes){
    //      if (err) {
    //          throw err;
    //      }
    //      res.json(notes)
    //  })
// router.delete('/api/notes/:_id', function (req, res){
//     notes.remove({
//         _id: req.params.id
//     },
//     function(err){
//         if(err) {
//             throw err;
//         } else {
//             console.log('Success')
//         }
//     })
// })

 
//loop, delete the one with matching id
//req.params.id
//look at filter method for arrays


module.exports = router;