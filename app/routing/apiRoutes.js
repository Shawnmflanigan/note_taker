const noteData = require('../data/db.json');
const genId = require('generate-unique-id');

// let id = genId ({
//     length: 5,
//     useLetters: false,
//     useNumbers: true,

// });

module.exports = function (app) {

    app.get('/api/notes', function(req, res) {
        res.json(noteData);
    });

    app.post('/api/notes', function(req, res) {
        let newNote = {
            id: genId ({
                length: 5,
                useNumbers: true,
                useLetters: false
            }),
            title: req.body.title,
            text: req.body.text,
        }
        noteData.push(newNote);
        res.json(noteData);
    });
}; 