const express = require('express')
const myRoutes = require('./routes/routes')
const conn = require('../backend/models/mongoConn')
const cors= require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.use('/', myRoutes)

app.listen(3001, () => {
    console.log("app is running on port 3001")
})
