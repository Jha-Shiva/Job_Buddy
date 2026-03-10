import express from 'express';
import dotenv from 'dotenv'

// files import
import connectDb from './db/db.js';

// config dotenv
dotenv.config()

// config db
connectDb()

// config express
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// config port
const PORT = process.env.PORT || 8080

// Routes
// app.use('api/v1/user')

app.listen(PORT, ()=>{
    console.log(`Server is connected on http://localhost:${PORT}`.bgCyan.white);
})

