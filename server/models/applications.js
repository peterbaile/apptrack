// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationsSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    status: {type: String},
    applicationNo: {type: String},
    applicationEmail: {type: String},
    isOther: {type: Boolean},
    university: {type: Schema.Types.ObjectId},
    universityName: {type: String},
    admissionContact: {type: String},
    programs: {type: [new Schema({
        seq: {type: Number}, 
        program: {type: Schema.Types.ObjectId}
    })]},
    round: {type: Schema.Types.ObjectId},
    completedStatus: {type: String},
    submittedReminderDT: {type: Date},
    submittedDT: {type: Date},
    submittedBy: {type: Schema.Types.ObjectId},
    acknowledgedDT: {type: Date},
    acknowledgedBy: {type: Schema.Types.ObjectId},
    universityEmailReceivedDT: {type: Date},
    createdBy: {type: String},
    createdDT: {type: Date},
    modifedBy: {type: String},
    modifiedDT: {type: Date}
})

module.export = applicationsSchema;