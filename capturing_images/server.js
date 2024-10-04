const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json({ limit: '10mb' }));

// Serve the public folder for HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Route to handle image upload
app.post('/upload', (req, res) => {
    const { image } = req.body;

    // Convert base64 to binary
    const base64Data = image.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Generate a unique filename and save to uploads folder
    const filename = `img${Date.now()}.png`;
    const filepath = path.join(uploadDir, filename);

    fs.writeFile(filepath, buffer, (err) => {
        if (err) {
            console.error('Error saving image:', err);
            return res.status(500).json({ error: 'Failed to save image' });
        }
        res.json({ message: 'Image saved', filename });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
