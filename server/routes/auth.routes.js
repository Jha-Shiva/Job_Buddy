import express from 'express'
import { registerUser } from '../controllers/auth.controllers.js';

const app = express();

app.post('/signup', registerUser)


export default app;