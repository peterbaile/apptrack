const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examinationsSchema = new Schema({
    id: Schema.Types.ObjectId,
    student: Schema.Types.ObjectId,
    examinationItems: Schema.Types.ObjectId,
    scores: [new Schema({examItemSubject: Schema.Types.ObjectId, score: String})],
    totalScore: String,
    status: String,
    createdDT: Date,
    createdBy: String,
    modifiedDT: Date,
    modifiedBy: String
});

module.exports = examinationsSchema;