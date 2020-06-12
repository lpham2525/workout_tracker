const router = require('express').Router()
const { Workout } = require('../models')

// GET all workouts
router.get('/workout', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

// GET one workout
router.get('/workout/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// POST one workout
router.post('/workout', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// PUT one workout
router.put('/workout/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one workout
router.delete('/workout/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router