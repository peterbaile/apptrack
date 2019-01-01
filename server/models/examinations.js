// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examinationsSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    student: {type: Schema.Types.ObjectId},
    examinationItems: {type: Schema.Types.ObjectId},
    scores: {type: [new Schema({
        examItemSubject: {type: Schema.Types.ObjectId}, 
        score: {type: String}
    })]},
    totalScore: {type: String},
    status: {type: String},
    createdDT: {type: Date},
    createdBy: {type: String},
    modifiedDT: {type: Date},
    modifiedBy: {type: String}
});

module.exports = examinationsSchema;