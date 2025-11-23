const express = require('express');
const route = express.Router()
const userRoute = require('./userRoute')

route.use('/user', userRoute)
module.exports = { route };