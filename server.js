const app = require('./api/index.js');
const express = require('express');
const path = require('path');
const PORT = 8088;

// Serve static website files locally with clean extensionless URL routing (resolves '/india' to '/india.html')
app.use(express.static(path.join(__dirname), {
    extensions: ['html']
}));

// Fallback: If page not found, send to 404.html
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Indtara Travels Node/Express server running locally at http://localhost:${PORT}`);
});
