const fs = require("fs");
const noteData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

dataGet = (app) => {


    function saveToDb(notes){
    
        notes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", notes, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    }

    app.get("/api/notes", (req, res) => {
        res.json(noteData);
        
    });

    app.post("/api/notes", (req, res) => {

        req.body.id = uuidv4();

        noteData.push(req.body);

        saveToDb(noteData);

        console.log(noteData);

        res.json(req.body);
    });

    app.delete("/api/notes", (req, res) => {
        
    });

};

module.exports = dataGet;