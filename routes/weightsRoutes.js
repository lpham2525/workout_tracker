const router = require('express').Router()
const { Weights } = require('../models')

// GET all weights workouts
router.get('/weights', (req, res) => {
  Weights.find()
    .then(weights => res.json(weights))
    .catch(err => console.error(err))
})

// GET one weights workout
router.get('/weights/:id', (req, res) => {
  Weights.findById(req.params.id)
    .then(weights => res.json(weights))
    .catch(err => console.error(err))
})

// POST one weights workout
router.post('/weights', (req, res) => {
  Weights.create(req.body)
    .then(weights => res.json(weights))
    .catch(err => console.error(err))
})

// PUT one weights workout
router.put('/weights/:id', (req, res) => {
  Weights.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one weights workout
router.delete('/weights/:id', (req, res) => {
  Weights.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
