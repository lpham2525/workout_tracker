const router = require('express').Router()
const { join } = require('path')
const { Workout } = require('../models')

// HTML routes
router.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, '../public/exercise.html'))
})

router.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, '../public/stats.html'))
})

// GET workouts within a range
router.get('/workouts/range', (req, res) => {
  Workout.find()
    .then(workouts => {
      res.json(workouts)
      console.log(workouts)
    })
    .catch(err => console.error(err))
})

// GET one workout
router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.query)
    .then(workout => {
      res.json(workout)
      console.log(workout)
    })
    .catch(err => console.error(err))
})

// CREATE one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// UPDATE one workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((info) => res.json(info))
    .catch(err => console.error(err))
})

module.exports = router
