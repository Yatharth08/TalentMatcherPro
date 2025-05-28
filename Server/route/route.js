import express from 'express';
import { createPresignedPost } from '../utils/s3.js';  // Correct relative path


const s3Router = express.Router();

s3Router.post('/signed_url', async (req, res) => {
    try {
        const { key, content_type } = req.body;
        const signedUrl = await createPresignedPost({ key, contentType: content_type });
        res.json({ signedUrl }); // Simpler response
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error generating signed URL', error: err.message });
    }
});

export default s3Router;