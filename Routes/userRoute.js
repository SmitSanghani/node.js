const express = require('express');
const { readData, writeData, loginuser } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const route = express.Router()

route.get('/read', readData)
route.post('/write', authMiddleware, writeData)
route.post('/loginuser', loginuser)
module.exports = route;