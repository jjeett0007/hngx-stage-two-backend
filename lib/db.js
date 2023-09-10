const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb+srv://jjeett0007:NiQCANcCTh4omC9U@people.ourvsiy.mongodb.net/users', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
}

module.exports = {
    connectToDatabase,
};
