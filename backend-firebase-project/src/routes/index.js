const express = require('express');
const IndexController = require('../controllers/index');
const { getFirestore } = require('../firebase/index');

const router = express.Router();

function setRoutes(app) {
    const db = getFirestore();
    const indexController = new IndexController(db);
    
    // Cars API routes
    app.use('/api/cars', router);
    
    router.get('/', indexController.getAllCars.bind(indexController));
    router.get('/:id', indexController.getCar.bind(indexController));
    router.post('/', indexController.addCar.bind(indexController));
    router.put('/:id', indexController.updateCar.bind(indexController));
    router.delete('/:id', indexController.deleteCar.bind(indexController));
}

module.exports = setRoutes;