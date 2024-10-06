const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const config = require('./config');

passport.use(new LinkedInStrategy({
    clientID: config.linkedin.clientId,
    clientSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL,
    scope: config.linkedin.scope
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Store these tokens securely (e.g., in a database)
        const userData = {
            id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            accessToken,
            refreshToken
        };
        
        return done(null, userData);
    } catch (error) {
        return done(error, null);
    }
}));