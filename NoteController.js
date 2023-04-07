const NoteModel = require('./NoteModel.js');



module.exports.getNote = async(req, res) => {
    const myNote = await NoteModel.find();
    res.send(myNote)
}

//POST
module.exports.saveNote = async(req, res) => {
    const { title, text, imageUrl } = req.body;
    NoteModel.create({ title, text, imageUrl })
    .then((data) => {console.log('Note added')
    res.send(data)
})
}

//DELETE
module.exports.deleteNote = async(req, res) => {
    const { _id } = req.body;
    NoteModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a note'))                                                                                 
}

//EDIT
module.exports.editNote = async(req, res) => {
    const {_id, title, text, imageUrl} = req.body;
    NoteModel.findByIdAndUpdate(_id, {title, text, imageUrl})
    .then(() => res.send('Edited a note'))                                       
}