const fs = require('fs');
const path = require('path');
module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        console.log("Getting notes*****\n");
        const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), {encoding:'utf8'});
        let notes = JSON.parse(data);
        res.json(notes);
    });
 
    app.post('/api/notes', (req, res) => {
        console.log('Route Hit****\n');
        const currentdata = fs.readFileSync(path.join(__dirname, '../db/db.json'), {encoding:'utf8'});
        const notesDB = JSON.parse(currentdata);
        let newNote = {
            id: notesDB.length,
            title: req.body.title,
            text: req.body.text
        }
        for (let i =0 ; i < notesDB.length; i++){
            notesDB[i].id = i
        }   
        notesDB.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDB) , function (err) {
            if (err) { return console.log(err);}
            console.log('Saved new information!');
          });
        res.json(notesDB);
    });
  
  
    app.delete(`/api/notes/:id`, (req, res) => {
        console.log("************\nAttempting to delete note no." + req.params.id + "\n****************");
        let noteID = req.params.id;
        const currentdata = fs.readFileSync(path.join(__dirname, '../db/db.json'), {encoding:'utf8'});
        var notesDB = JSON.parse(currentdata);
       // console.log("Db is this long:" + notesDB.length);
        for (let i =0 ; i < notesDB.length ; i++){
           // console.log("This is the note at i=" + i +"\n id:"+ notesDB[i].id+"\ntitle: "+ notesDB[i].title+ "\ntext: "+ notesDB[i].text+ "\n ******");
        if (noteID == notesDB[i].id) {
            notesDB.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDB) ,{encoding:'utf8'}, function (err) {
                if (err) { return console.log(err);}
                console.log('Saved new information!');
              });
            res.json({ ok: true });
        }        
        }
        return console.log('Note not found!');     
    });
  };