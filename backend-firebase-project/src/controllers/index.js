class IndexController {
    constructor(db) {
        this.db = db;
    }

    // Get all cars
    async getAllCars(req, res) {
        try {
            const carsSnapshot = await this.db.collection('cars').get();
            const cars = [];
            carsSnapshot.forEach(doc => {
                cars.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(cars);
        } catch (error) {
            console.error('Error fetching cars:', error);
            res.status(500).json({ error: 'Error fetching cars' });
        }
    }

    // Get car by ID
    async getCar(req, res) {
        const { id } = req.params;
        try {
            const carDoc = await this.db.collection('cars').doc(id).get();
            if (!carDoc.exists) {
                return res.status(404).json({ error: 'Car not found' });
            }
            res.status(200).json({ id: carDoc.id, ...carDoc.data() });
        } catch (error) {
            console.error('Error fetching car:', error);
            res.status(500).json({ error: 'Error fetching car details' });
        }
    }

    // Add new car
    async addCar(req, res) {
        const { name, model, price, image, description } = req.body;
        try {
            const carRef = await this.db.collection('cars').add({
                name,
                model,
                price,
                image,
                description,
                createdAt: new Date()
            });
            res.status(201).json({ id: carRef.id, name, model, price, image, description });
        } catch (error) {
            console.error('Error adding car:', error);
            res.status(500).json({ error: 'Error adding car' });
        }
    }

    // Update car
    async updateCar(req, res) {
        const { id } = req.params;
        const updateData = req.body;
        try {
            await this.db.collection('cars').doc(id).update({
                ...updateData,
                updatedAt: new Date()
            });
            res.status(200).json({ message: 'Car updated successfully' });
        } catch (error) {
            console.error('Error updating car:', error);
            res.status(500).json({ error: 'Error updating car' });
        }
    }

    // Delete car
    async deleteCar(req, res) {
        const { id } = req.params;
        try {
            await this.db.collection('cars').doc(id).delete();
            res.status(200).json({ message: 'Car deleted successfully' });
        } catch (error) {
            console.error('Error deleting car:', error);
            res.status(500).json({ error: 'Error deleting car' });
        }
    }
}

module.exports = IndexController;