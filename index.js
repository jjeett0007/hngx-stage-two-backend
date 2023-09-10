const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./lib/db')
const { userRoutes } = require('./route/userRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Call the connectToDatabase function to connect to MongoDB
connectToDatabase();

app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
