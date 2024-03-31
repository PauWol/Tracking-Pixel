const express = require('express');
const app = express();
const port = 3000;

// Define a route for the tracking pixel
app.get('/tracking.png', (req, res) => {
    // Set content type to image/png
    res.set('Content-Type', 'image/png');
    // Send a 1x1 transparent pixel
    res.send(Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'));
    
    // Insert tracking logic here (e.g., logging the request to a database)
    console.log('Received request from:', req.ip);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
