const { Schema, model } = require('mongoose')

module.exports = model('Cardio', new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number
}))
