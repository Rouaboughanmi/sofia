const express = require('express');
const dotenv = require('dotenv');
const logger = require('../middleware/logger'); // Adjusted path to point outside src
const routes = require('../routes/index');      // Adjusted path to point outside src

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use('/', routes);

// Serve static files
app.use(express.static('public'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

