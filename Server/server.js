import express from 'express';
import cors from 'cors';
import config from './config/config.js'; 
import s3Router from './route/route.js';

const app = express()

app.use(express.json()) //React sends JSON, in order to handle that.

// Express will accept the request coming from localhost:3000
app.use(cors({
    origin: 'http://localhost:3000'
}))

// Request to http://localhost:3001/api/s3/signed_url
// will trigger the route handler in s3Router
app.use('/api/s3', s3Router)

app.listen(config.PORT, () => {
    console.log(`Server listening on http://localhost:${config.PORT}`)
})