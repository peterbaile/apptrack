// models define the format stored in the DB
// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const predictedScoreSchema = require('./predictedScores');
const detailSchema = require('./detail');
const transcriptsSchema = require('./transcripts');
const applicationsSchema = require('./applications');
const applicationResultsSchema = require('./applicationResults');
const examinationsSchema = require('./examinations');
const scholarshipsSchema = require('./scholarships');
const recommendationSchema = require('./recommendation');

const studentsSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "user"},
    detail: {type: detailSchema},
    school: {type: Schema.Types.ObjectId, ref: "schools"},
    year: {type: String},
    schoolGroups: {type: [String]}, // ERD: Array
    advisers: {type: [String]}, // ERD: Array
    predictedScore: {type: predictedScoreSchema},
    transcripts: {type: [transcriptsSchema]},
    strengths: {type: String},
    weaknesses: {type: String},
    acquaintanceTime: {type: String},
    abilityRates: {type: [new Schema({type: {type: String}, rate: {type: String}})]},
    recommendations: {type: [recommendationSchema]},
    application: {type: [applicationsSchema]},
    applicationResults: {type: [applicationResultsSchema]},
    applicationStatus: {type: new Schema({
        detailStatus: {type: String},
        predictedScoresStatus: {type: String},
        recommendationStatus: {type: String}
    })},
    examinations: {type: [examinationsSchema]},
    scholarships: {type: [scholarshipsSchema]},
    createdDT: {type: Date},
    createdBy: {type: String},
    modifiedDT: {type: Date},
    modifiedBy: {type: String}
});

// return a module with the name 'Book' (a model = a collection in a DB)
module.exports = mongoose.model('Students', studentsSchema);