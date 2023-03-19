const NoteModel = require('../models/noteModel')
const mongoose = require("mongoose")





const noteCreate = async (req,res) => {
    const {baslik, explanation} = req.body;
    

    try{
        const note = await NoteModel.create({baslik,explanation})
        res.status(200).json(note)
    }catch(error){
        res.status(400).json({hata:error.message})
    }
}

const getAllNote = async (req,res) => {
    const notes = await NoteModel.find().sort({
        createdAt:-1
    })

    res.status(200).json(notes)
    
}

const getNote = async (req,res) => {
    
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID gecersiz'})
    }

    const note = await NoteModel.findById(id);

    if(!note){
        return res.status(404).json("Note bulunamadı")
    }

    res.status(200).json(note)
}

const deleteNote = async (req,res) => {
    
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID gecersiz'})
    }

    const note = await NoteModel.findOneAndDelete({_id:id});

    if(!note){
        return res.status(404).json("Note bulunamadı")
    }

    res.status(200).json(note)
}

const updateNote = async (req,res) => {
    
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID gecersiz'})
    }

    const note = await NoteModel.findOneAndUpdate({_id:id},{
        ...req.body
    },{new:true});

    if(!note){
        return res.status(404).json("Note bulunamadı")
    }

    res.status(200).json(note)
}


module.exports = {
    noteCreate,
    getAllNote,
    getNote,
    deleteNote,
    updateNote
}