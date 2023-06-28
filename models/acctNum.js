const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const acctNumSchema = new Schema({
     name: {type: String, required: true },
     sortOrder: Number
}, {
     timestamps: true
});
module.exports = mongoose.model('AcctNum', acctNumSchema);