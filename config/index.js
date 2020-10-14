module.exports = require('mongoose').connect(process.env.DB_URI || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
