'use strict'

const fs = require ('fs')
const path = require ('path')
const mongoose = require ('mongoose')

const basename = path.basename (__filename)
const db = {}

  
mongoose.connect ('mongodb://mongo_db/cashDash')
  .then (() => console.log ('MongoDB connected'))
  .catch (err => console.error ('MongoDB connection error:', err))


fs.readdirSync (__dirname)
  .filter (file => {
    return (
      file !== basename &&
      file.slice (-3) === '.js' &&
      file.indexOf ('.test.js') === -1
    )
  })
  .forEach (file => {
    const model = require (path.join (__dirname, file))
    db [ model.name ] = model
  })

module.exports = db
