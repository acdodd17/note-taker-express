// import express data modules
const router = require('express').Router();
// import uuid for creating unique ids for each note
const { v4: uuidv4 } = require('uuid');
// import data from db.json
const notes = require('../db/db.json');

// import path and fs modules
const path = require('path');
const fs = require('fs');

// get data from notes array in db.json file
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// post data to create a new note on the page
router.post('/notes', (req, res) => {
    // create unique id for new note
    const newNote = req.body;
    newNote.id = uuidv4();
    // write data to notes array
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
});

// delete note from the page 
router.delete('/notes/:id', (req, res) => {
    // get note id
    const id = req.params.id;
    // delete note with given id
    const noteDel = notes.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(noteDel, null, 2)
    );
    // return new notes array to display on page
    res.json(noteDel);
});

// export api routes 
module.exports = router; 
