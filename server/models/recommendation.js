// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendationSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    adviserName: {type: String},
    application: {type: []},
    type: {type: String},
    filename: {type: String},
    path: {type: String},
    text: {type: String},
    status: {type: String},
    uploadedBy: {type: Schema.Types.ObjectId},
    uploadedDT: {type: Date}
});

module.exports = recommendationSchema;