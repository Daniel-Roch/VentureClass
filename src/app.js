const express = require('express')
const app = express()

const db = require('./Infra/db.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const rotaVideo = require('./Controllers/VideoController')
//Passando app e database.
rotaVideo(app,db)


module.exports = app