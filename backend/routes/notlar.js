const express = require("express")
const { noteCreate, getAllNote, getNote, deleteNote, updateNote } = require("../controllers/noteController")
const router = express.Router()

router.get("/", getAllNote)

router.get('/:id' ,getNote)

router.post('/', noteCreate)

router.delete('/.:id',deleteNote)

router.patch('/:id' , updateNote)

module.exports = router
