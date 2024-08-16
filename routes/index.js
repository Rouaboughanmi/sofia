const express = require('express');
const router = express.Router();

// Basic Routes
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

router.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

router.get('/listUsers', (req, res) => {
    res.json({ message: [{user1: 'roua'}, {user1: 'aya'}] });
});
module.exports = router;