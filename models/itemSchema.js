const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  dateOfExpense: { type: Date, required: true },
  payee: { type: Schema.Types.ObjectId, ref: 'Payee' },
  description: { type: Schema.Types.ObjectId, ref: 'Description' },
  usedFor: { type: Schema.Types.ObjectId, ref: 'Use' },
  numUnits: { type: Number, required: true, default: 1 },
  unitMeas: { type: String, required: true },
  price: { type: Number, required: true }, //beforeTnSAmount
  tax: { type: Number, required: true },
  shipping: { type: Number, required: true },
  total: { type: Number, required: true },
  accountNum: { type: Schema.Types.ObjectId, ref: 'AcctNum' },
  code_50010: { type: Number},
  code_50012: { type: Number},
  code_50020: { type: Number},
  code_50022: { type: Number},
  code_50030: { type: Number},
  code_50040: { type: Number},
  code_50090: { type: Number},
  code_50100: { type: Number},
  code_50290: { type: Number},
  code_50550: { type: Number},
  code_50552: { type: Number},
  code_50560: { type: Number},
  code_50565: { type: Number},
  code_50570: { type: Number},
  code_50580: { type: Number},
  code_50590: { type: Number},
  code_50610: { type: Number},
  code_50620: { type: Number},
  code_50640: { type: Number},
  code_60210: { type: Number},
  code_60190: { type: Number},
  code_60195: { type: Number},
  code_16000: { type: Number},
  code_16030: { type: Number},
  code_20012: { type: Number},
  code_60140: { type: Number},
  code_60185: { type: Number},
  code_40195: { type: Number}

}, {
  timestamps: true
});

module.exports = itemSchema;