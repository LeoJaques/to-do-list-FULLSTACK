const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
  res.status(200).send()
})

module.exports = app