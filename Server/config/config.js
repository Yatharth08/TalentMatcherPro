import {config as loadConfig} from 'dotenv'

loadConfig({
    path: '.env.local'
})

const config = {
    PORT: 3001,
    AWS: {
        AccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        AWSSecretKey: process.env.AWS_SECRET_KEY,
        Region: 'us-east-1',
        BucketName: process.env.AWS_S3_BUCKET_NAME
        
    }
}

export default config;