const {Schema, model} = require('mongoose')

const fruitSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    readyToEat: Boolean,
    color: String
}, {
    timestamps:true
})

const Fruit = model('Fruit', fruitSchema)

module.exports = Fruit