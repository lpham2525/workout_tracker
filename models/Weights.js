const { Schema, model } = require('mongoose')

module.exports = model('Weights', new Schema({
  name: String,
  type: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number
}))
