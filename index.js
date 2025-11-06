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

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (err) {
        console.error('Failed to start server', err);
        process.exit(1);
    }
}

start();