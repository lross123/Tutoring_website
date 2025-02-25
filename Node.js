const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const bookings = [];

// Endpoint to handle booking requests
app.post('/api/book', (req, res) => {
    const { name, timeSlot, day, week } = req.body;
    bookings.push({ name, timeSlot, day, week });
    fs.writeFileSync('bookings.json', JSON.stringify(bookings, null, 2));
    res.status(200).send({ message: 'Booking request received.' });
});

// Endpoint to view all bookings (restricted to you)
app.get('/api/bookings', (req, res) => {
    res.status(200).send(bookings);
});

app.listen(3000, () => console.log('Server running on port 3000'));
