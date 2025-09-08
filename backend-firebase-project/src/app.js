const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeApp } = require('./firebase/index');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend
app.use(cors({
    origin: 'http://localhost:5500', // Update this with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initializeApp();

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Car Showroom API',
        endpoints: {
            cars: '/api/cars'
        }
    });
});

// Initialize routes
routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET  /');
    console.log('  GET  /api/cars');
    console.log('  GET  /api/cars/:id');
    console.log('  POST /api/cars');
    console.log('  PUT  /api/cars/:id');
    console.log('  DELETE /api/cars/:id');
});