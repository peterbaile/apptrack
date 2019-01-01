// ok

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    lastName: {type: String},
    middleName: {type: String},
    firstName: {type: String},
    address: {type: String},
    dob: {type: Date},
    phone: {type: [new Schema({
        type: {type: String},
        value: {type: String}
    })]},
    additionalEmail: {type: [String]}
});

module.exports = detailSchema;