// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictedScoresSchema = new Schema({
    expectedResultDT: {type: Date},
    examType: {type: String},
    scores: {type: [new Schema({
        id: {type: Schema.Types.ObjectId},
        subject: {type: String},
        level: {type: String},
        score: {type: String}
    })]},
    totalScores: {type: String}
})

module.exports = predictedScoresSchema;