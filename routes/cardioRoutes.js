const router = require('express').Router()
const { Cardio } = require('../models')

// GET all cardio workouts
router.get('/cardio', (req, res) => {
  Cardio.find()
    .then(cardio => res.json(cardio))
    .catch(err => console.error(err))
})

// GET one cardio workout
router.get('/cardio/:id', (req, res) => {
  Cardio.findById(req.params.id)
    .then(cardio => res.json(cardio))
    .catch(err => console.error(err))
})

// POST one cardio workout
router.post('/cardio', (req, res) => {
  Cardio.create(req.body)
    .then(cardio => res.json(cardio))
    .catch(err => console.error(err))
})

// PUT one cardio workout
router.put('/cardio/:id', (req, res) => {
  Cardio.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one cardio workout
router.delete('/cardio/:id', (req, res) => {
  Cardio.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
