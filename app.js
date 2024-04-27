const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle generating the README
app.post('/generate-readme', async (req, res) => {
    const files = req.body.files;

    // Dynamically import node-fetch
    const fetch = (await import('node-fetch')).default;

    // Make a POST request to the Flask API
    const response = await fetch('http://127.0.0.1:5000/generate-readme', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ files })
    });

    const data = await response.json();
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
