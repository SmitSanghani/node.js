const express = require('express');
const route = express.Router()
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')
const { authMiddleware } = require("../middlewares/authMiddleware")

route.use('/user', userRoute)
route.use('/product', authMiddleware, productRoute)
module.exports = { route };