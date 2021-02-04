const noteData = require('../data/db.json');

module.exports = function (app) {

    app.get('/api/notes', function(req, res) {
        res.json(noteData);
        console.log(noteData);
    });
    
    app.post('/api/notes', function(req, res) {
        const newNote = req.body;
        console.log(newNote);
        noteData.push(newNote);
        res.json(newNote);
    });
};