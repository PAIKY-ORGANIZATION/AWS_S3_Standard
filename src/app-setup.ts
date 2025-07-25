import './bootstrap.js' // This  needs to be imported at the top in order for environment variables to be loaded successfully.

import express from 'express';
import { router as awsS3router } from './routes/s3-router.js';
import { router as loggerRouter } from './routes/logger-router.js';
import reqLoggerExpress from 'req-logger-express'
import {errorMiddleware} from 'custom-exceptions-express'


const app = express();
app.use(express.json());


//Custom middleware
app.use(reqLoggerExpress('AWS_Standard_API'))
//Routes
app.use('/api',  awsS3router);
app.use('/api',  loggerRouter);



//Error Middleware
app.use(errorMiddleware) // Optional, recommended

// I exported the app for testing in vitest without running the server:
export default app
