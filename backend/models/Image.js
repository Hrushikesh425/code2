// image model

const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    
    url: {
        type: String,
        required: true,
    }
})

const Image = mongoose.model("Eventimage", imageSchema, "Eventimage");

module.exports = Image;
