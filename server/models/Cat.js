const mongoose = require('mongoose');

//new layout for data I want to layout
const CatSchema = new mongoose.Schema({
    name: {
        //determines data type
        type: String,
        //when true, this data is required
        required: true,
        trim: true,
        //There can only be one
        unique: true,
    },
    bedsOwned: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Date,
        //When data is made, auto sets date
        default: Date.now,
    }
});

const CatModel = mongoose.model('Cat', CatSchema);
module.exports = CatModel;