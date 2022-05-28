const userController = require('../controller/users.controller');
const express = require('express');
const route = express.Router();

const uploadMulter = require('../middlewares/upload');
const validation = require('../middlewares/validation');

route.post('/signup', userController.sign_up);
route.put('/uploadfile/:id', uploadMulter, validation, userController.uploadFile);

module.exports = route;