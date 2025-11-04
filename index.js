const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const AllRoutes = require('./routes/index')
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}))

app.use('/', AllRoutes)

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log('Connected successfully from index.js')
    } catch (err) {
        console.log('Failed to connect from index.js')
    }
})