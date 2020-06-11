const router = require('express').Router()

router.use('/api', require('./cardioRoutes.js'))
router.use('/api', require('./weightsRoutes.js'))

module.exports = router
