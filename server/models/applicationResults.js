// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationResultsSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    application: {type: Schema.Types.ObjectId},
    university: {type: String},
    applicationNo: {type: String},
    offerStatus: {type: String},
    offerCondition: {type: String},
    programmeOffered: {type: String},
    matriculation: {type: Boolean},
    status: {type: String},
    createdDT: {type: Date},
    modifiedBy: {type: Date},
    modifiedDT: {type: String}
})

module.exports = applicationResultsSchema;