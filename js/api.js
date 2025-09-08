const API_BASE_URL = 'http://localhost:3000/api';

// Fetch all cars
async function getAllCars() {
    try {
        const response = await fetch(`${API_BASE_URL}/cars`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
}

// Get car details by ID
async function getCarById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/cars/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching car details:', error);
        throw error;
    }
}

// Add a new car
async function addCar(carData) {
    try {
        const response = await fetch(`${API_BASE_URL}/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding car:', error);
        throw error;
    }
}

// Update car details
async function updateCar(id, carData) {
    try {
        const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating car:', error);
        throw error;
    }
}

// Delete a car
async function deleteCar(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting car:', error);
        throw error;
    }
}
