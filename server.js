const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 8088;
const JWT_SECRET = 'indtara-travels-secret-key-12345';
const MONGO_URI = 'mongodb+srv://indtaratravel_db_user:YCS22nOpmu7R6OgN@indtara.7vseoml.mongodb.net/?appName=INDTARA';

app.use(express.json());
app.use(cookieParser());

let db;

// Connect to MongoDB Atlas
MongoClient.connect(MONGO_URI)
    .then(client => {
        db = client.db('indtara_travels');
        console.log('Successfully connected to MongoDB Atlas');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB Atlas:', err);
    });

// API: Register User
app.post('/api/auth/register', async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const usersCol = db.collection('users');
        const existingUser = await usersCol.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ error: 'An account with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            fullname,
            email: email.toLowerCase(),
            password: hashedPassword,
            createdAt: new Date()
        };

        const result = await usersCol.insertOne(newUser);
        
        // Auto-login after registration
        const token = jwt.sign({ id: result.insertedId, email: newUser.email, fullname: newUser.fullname }, JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

        res.status(201).json({
            user: { id: result.insertedId, email: newUser.email, fullname: newUser.fullname }
        });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: err.message });
    }
});

// API: Login User
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const usersCol = db.collection('users');
        const user = await usersCol.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({ error: 'Invalid login credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid login credentials' });
        }

        const token = jwt.sign({ id: user._id, email: user.email, fullname: user.fullname }, JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

        res.json({
            user: { id: user._id, email: user.email, fullname: user.fullname }
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: err.message });
    }
});

// API: Logout User
app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ success: true });
});

// API: Get Current Session
app.get('/api/auth/session', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'No active session' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({
            user: { id: decoded.id, email: decoded.email, fullname: decoded.fullname }
        });
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired session' });
    }
});

// API: Save Enquiries
app.post('/api/enquiries', async (req, res) => {
    try {
        const enquiryData = req.body;
        enquiryData.submittedAt = new Date();
        
        const enquiriesCol = db.collection('enquiries');
        await enquiriesCol.insertOne(enquiryData);
        
        res.status(201).json({ success: true });
    } catch (err) {
        console.error('Save enquiry error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Serve static website files with clean extensionless URL routing (resolves '/india' to '/india.html')
app.use(express.static(path.join(__dirname), {
    extensions: ['html']
}));

// Fallback: If page not found, send to index.html (or handle 404)
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Indtara Travels Node/Express server running at http://localhost:${PORT}`);
});
