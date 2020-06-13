const router = require('express').Router()
const { join } = require('path')
const { Workout } = require('../models')

// HTML routes
router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

router.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, '../public/exercise.html'))
})

router.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, '../public/stats.html'))
})

// GET all workouts
router.get('/api/workout', (req, res) => {
  Workout.find()
    .then(workouts => {
      res.json(workouts)
      console.log(workouts)
    })
    .catch(err => console.error(err))
})

// GET one workout
router.get('/api/workout/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => {
      res.json(workout)
      console.log(workout)
    })
    .catch(err => console.error(err))
})

// CREATE one workout
router.post('/api/workout', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// UPDATE one workout
router.put('/api/workout/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router

// // PUT one workout
// router.put('/workout/:id', (req, res) => {
//   Workout.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.sendStatus(200))
//     .catch(err => console.error(err))
// })
