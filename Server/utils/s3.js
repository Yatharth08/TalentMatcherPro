import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});


export async function createPresignedPost({ key, contentType }) {
    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,

        Key: `public/${key}`,  // Directly prepend the key
        ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(s3, command, {
        expiresIn: 5 * 60, // 5 minutes expiration
    });

    return signedUrl;
}