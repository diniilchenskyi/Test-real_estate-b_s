const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    if (!MONGO_URI) {
        console.error('MONGO_URI is not set. Add it to .env (see server/config/config.env.example).');
        return Promise.reject(new Error('MONGO_URI is required'));
    }

    return mongoose
        .connect(MONGO_URI)
        .then(() => {
            console.log('Mongoose connected to MongoDB');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err.message);
            return Promise.reject(err);
        });
};

module.exports = connectDatabase;
