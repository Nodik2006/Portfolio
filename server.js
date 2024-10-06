const express = require("express");
const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
const passport = require('passport');
const session = require('express-session');
const linkedInRoutes = require('./landing/assets/routes/linkedin');
require('./auth');

// Load environment variables
dotenv.config();

const app = express();
const port = 3000;

// Session middleware (add this before other middleware)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport (add this after session middleware)
app.use(passport.initialize());
app.use(passport.session());

// Middleware for static files from 'landing/public'
app.use(express.static(path.join(__dirname, "landing", "public")));

// Middleware for static files from 'landing/assets'
app.use("/assets", express.static(path.join(__dirname, "landing", "assets")));

// Middleware for parsing JSON requests
app.use(express.json());

// LinkedIn routes
app.use('/api', linkedInRoutes);

// Authentication routes
app.get('/auth/linkedin', passport.authenticate('linkedin', {
    scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social']
}));

app.get('/auth/linkedin/callback', 
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication
        res.redirect('/');
    }
);

// Routes for pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
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

// Add authentication check middleware
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Not authenticated' });
};

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