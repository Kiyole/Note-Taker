const express = require("express");
const fs = require("fs");
const router = express.Router();
let notes = require("../db/db.json");
console.log(notes)
router.get("/api/notes", function(req, res){
    res.json(notes);
})
router.post("/api/notes", function(req, res){
    //let newNote = req.body;
    if(notes.length < 1){
        req.body.id = 1
    } else {
        let lastID = notes[notes.length -1].id
        req.body.id = lastID + 1
    }
    console.log(req.body);
    notes.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    //path/name of file db.json
    //content notes (stringify)
    res.json(notes);
})
router.delete('/api/notes/:_id', function (req, res){
    let ID = req.params._id;
    notes = notes.filter(function (e){
       return e.id != ID ;
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes); 
    console.log(ID);
    
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