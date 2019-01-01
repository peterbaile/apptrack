// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scholarshipsSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    scholarshipItem: {type: Schema.Types.ObjectId},
    isOther: {type: Boolean},
    otherScholarshipTitle: {type: String},
    status: {type: String},
    createdDT: {type: Date},
    createdBy: {type: String},
    modifiedDT: {type: Date},
    modifiedBy: {type: String}
});

module.exports = scholarshipsSchema;