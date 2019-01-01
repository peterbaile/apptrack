// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transcriptsSchema = new Schema({
    id: {type: Schema.Types.ObjectId},
    student: {type: String},
    filename: {type: String},
    path: {type: String},
    status: {type: String},
    uploadedBy: {type: Schema.Types.ObjectId},
    uploadedDT: {type: Date}
});

module.exports = transcriptsSchema;