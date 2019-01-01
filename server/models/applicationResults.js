// 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationResultsSchema = new Schema({
    id: Schema.Types.ObjectId,
    application: Schema.Types.ObjectId,
    university: String,
    applicationNo: String,
    offerStatus: String,
    offerCondition: String,
    programmeOffered: String,
    matriculation: Boolean,
    status: String,
    createdDT: Date,
    modifiedBy: Date,
    modifiedDT: String
})

module.exports = applicationResultsSchema;