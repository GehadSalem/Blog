import dotenv  from 'dotenv'
dotenv.config()
import express from 'express';
import initApp from './src/app.router.js';
const app = express()
const port = 5000


console.log({DB: process.env.DB_LOCAL});

initApp(app, express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))