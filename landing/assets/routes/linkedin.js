const express = require('express');
const axios = require('axios');
const router = express.Router();

// LinkedIn API configuration
const LINKEDIN_API_URL = 'https://api.linkedin.com/v2';
const LINKEDIN_AUTHOR_FIELDS = 'id,firstName,lastName,profilePicture(displayImage~:playableStreams)';
const LINKEDIN_POST_FIELDS = 'id,author,created,commentary,visibility,content';

// Helper function to get user profile
async function getLinkedInProfile(accessToken) {
    try {
        const response = await axios.get(`${LINKEDIN_API_URL}/me`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching LinkedIn profile:', error.response?.data || error.message);
        throw error;
    }
}

// Helper function to get user's posts
async function getLinkedInPosts(accessToken, userId) {
    try {
        // First, get the user's author URN
        const authorUrn = `urn:li:person:${userId}`;
        
        // Get user's posts using the shares API
        const response = await axios.get(`${LINKEDIN_API_URL}/shares`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Restli-Protocol-Version': '2.0.0'
            },
            params: {
                q: 'author',
                authors: [authorUrn],
                count: 10 // Adjust as needed
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching LinkedIn posts:', error.response?.data || error.message);
        throw error;
    }
}

// Format LinkedIn post data
function formatLinkedInPost(post, authorProfile) {
    return {
        id: post.id,
        author: {
            name: `${authorProfile.firstName.localized.en_US} ${authorProfile.lastName.localized.en_US}`,
            profilePicture: authorProfile.profilePicture?.['displayImage~']?.elements[0]?.identifiers[0]?.identifier || null
        },
        text: post.commentary || post.content?.title || '',
        created: post.created?.time || new Date().toISOString(),
        postUrl: `https://www.linkedin.com/feed/update/${post.id}`
    };
}

// Main endpoint to get LinkedIn posts
router.get('/api/linkedin-posts', async (req, res) => {
    try {
        const accessToken = 'YOUR_ACCESS_TOKEN'; // Store this securely!
        
        // Get user profile first
        const profile = await getLinkedInProfile(accessToken);
        
        // Get posts using profile ID
        const postsData = await getLinkedInPosts(accessToken, profile.id);
        
        // Format posts
        const formattedPosts = postsData.elements.map(post => 
            formatLinkedInPost(post, profile)
        );

        res.json(formattedPosts);
    } catch (error) {
        console.error('LinkedIn API Error:', error);
        
        // Send appropriate error response
        if (error.response?.status === 401) {
            res.status(401).json({ 
                error: 'Unauthorized access. Please check your LinkedIn access token.' 
            });
        } else if (error.response?.status === 404) {
            res.status(404).json({ 
                error: 'LinkedIn resources not found. Please check your API endpoint and permissions.' 
            });
        } else {
            res.status(500).json({ 
                error: 'Error fetching LinkedIn posts. Please try again later.' 
            });
        }
    }
});

module.exports = router;