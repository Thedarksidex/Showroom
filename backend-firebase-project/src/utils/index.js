export const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
};

export const validateUserData = (data) => {
    const { name, email } = data;
    if (!name || !email) {
        throw new Error('Name and email are required');
    }
    // Additional validation logic can be added here
};