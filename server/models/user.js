// models define the format stored in the DB
// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, unique: true},
    username: {type: String, unique: true},
    password: {type: String},
    latestLoginDT: {type: Date},
    status: {type: String},
    type: {type: String},
    student: {type: Schema.Types.ObjectId, ref: "students"},
    // adviser: {type: Schema.Types.ObjectId},
    // provider: {type: Schema.Types.ObjectId},
    acceptedTos: {type: String},
    accpetedTosDT: {type: Date},
    createdBy: {type: String},
    createdDT: {type: Date},
    modifedBy: {type: String},
    modifiedDT: {type: Date}
});



// return a module with the name 'Book' (a model = a collection in a DB)
module.exports = mongoose.model('User', userSchema);