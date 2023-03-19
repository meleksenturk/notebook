const mongoose  = require('mongoose')

const schema = mongoose.Schema

const noteSchema = schema({
    baslik:{
        type:String,
        required:true
    },
    explanation:{
        type:String,
        required:true
    },
},
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Note', noteSchema)