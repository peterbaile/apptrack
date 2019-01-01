const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scholarshipsSchema = new Schema({
    id: Schema.Types.ObjectId,
    scholarshipItem: Schema.Types.ObjectId,
    isOther: Boolean,
    otherScholarshipTitle: String,
    status: String,
    createdDT: Date,
    createdBy: String,
    modifiedDT: Date,
    modifiedBy: String
});

module.exports = scholarshipsSchema;