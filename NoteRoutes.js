const { Router } = require('express');
const { saveNote, getNote, deleteNote, editNote } = require('./NoteController.js');
const router = Router();

router.get('/', getNote);
router.post('/saveNote', saveNote);
router.post('/deleteNote', deleteNote);
router.post('/editNote', editNote);

module.exports = router;