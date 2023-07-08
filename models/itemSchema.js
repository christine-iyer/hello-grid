// const item = require('./item');

// const Schema = require('mongoose').Schema;

// const itemSchema = new Schema({
//   dateOfExpense: { type: String, required: true },
//   payee: { type: Schema.Types.ObjectId, ref: 'Payee' },
//   description: { type: Schema.Types.ObjectId, ref: 'Description' },
//   usedFor: { type: Schema.Types.ObjectId, ref: 'Use' },
//   numUnits: { type: Number, required: true, default: 1 },
//   unitMeas: { type: String, required: true },
//   price: { type: String, required: true }, //beforeTnSAmount
//   tax: { type: String, required: true },
//   shipping: { type: String, required: true },
//   total: { type: String, required: true },
//   accountNum: { type: Schema.Types.ObjectId, ref: 'AcctNum' },
//   code_50010: { type: String},
//   code_50012: { type: String},
//   code_50020: { type: String},
//   code_50022: { type: String},
//   code_50030: { type: String},
//   code_50040: { type: String},
//   code_50090: { type: String},
//   code_50100: { type: String},
//   code_50290: { type: String},
//   code_50550: { type: String},
//   code_50552: { type: String},
//   code_50560: { type: String},
//   code_50565: { type: String},
//   code_50570: { type: String},
//   code_50580: { type: String},
//   code_50590: { type: String},
//   code_50610: { type: String},
//   code_50620: { type: String},
//   code_50640: { type: String},
//   code_60210: { type: String},
//   code_60190: { type: String},
//   code_60195: { type: String},
//   code_16000: { type: String},
//   code_16030: { type: String},
//   code_20012: { type: String},
//   code_60140: { type: String},
//   code_60185: { type: String},
//   code_40195: { type: String}

// }, {
//   timestamps: true
// });

// module.exports = itemSchema;
const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: { type: String},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = itemSchema;