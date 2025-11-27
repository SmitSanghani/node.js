const express = require('express');
const route = express.Router()
const { productController } = require("../controllers/productController")

route.get('/get', productController.getproduct)
route.post('/add', productController.addproduct)
module.exports = route;