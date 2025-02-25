const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const bookings = []; // Temporary storage for bookings

// API endpoint to handle booking requests
app.post('/api/book', (req, res) => {
    const { name, timeSlot, day, week } = req.body;
    bookings.push({ name, timeSlot, day, week });

    // Save to a file (optional)
    fs.writeFileSync('bookings.json', JSON.stringify(bookings, null, 2));

    res.status(200).send({ message: 'Booking request received.' });
});

// API endpoint for you to view all bookings
app.get('/api/bookings', (req, res) => {
    res.status(200).send(bookings);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
