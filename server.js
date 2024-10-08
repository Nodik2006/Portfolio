const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const passport = require('passport');
const session = require('express-session');
const linkedInRoutes = require('./landing/assets/routes/linkedin');
require('./auth');

// Load environment variables
dotenv.config();

const app = express();
const port = 3000;

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Static file middleware
app.use(express.static(path.join(__dirname, "landing", "public")));
app.use("/assets", express.static(path.join(__dirname, "landing", "assets")));
app.use(express.json());

// Authentication check middleware
const isAuthenticated = (req, res, next) => {
    console.log('Session:', req.session);
    console.log('User:', req.user);
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Not authenticated. Please log in via LinkedIn.' });
};

// Protected LinkedIn routes
app.use('/api/linkedin-posts', isAuthenticated, linkedInRoutes);

// Authentication routes
app.get('/auth/linkedin', passport.authenticate('linkedin', {
    scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social']
}));

app.get('/auth/linkedin/callback', 
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    (req, res) => {
        console.log('LinkedIn authentication successful');
        console.log('User:', req.user);
        res.redirect('/');
    }
);

// Auth status endpoint
app.get('/api/auth/status', (req, res) => {
    res.json({
        isAuthenticated: req.isAuthenticated(),
        user: req.user
    });
});

// Page routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

app.get("/about-me", (req, res) => {
  res.sendFile(path.join(__dirname, "landing", "public", "about.html"));
});

app.get("/shelf", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "shelf.html"));
});

app.get("/work", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "work.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

// Contact form route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.send("Message sent!");
});

// Protected route example
app.get('/api/profile', isAuthenticated, (req, res) => {
    res.json(req.user);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`LinkedIn API ${process.env.LINKEDIN_ACCESS_TOKEN ? 'is' : 'is NOT'} configured`);
});