
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './src/config/database';
import authRoutes from './src/api/v1/auth.routes';
import projectRoutes from './src/api/v1/project.routes';
import generateRoutes from './src/api/v1/generate.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/generate', generateRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Server is running.');
});

// Database connection test and server start
const startServer = async () => {
    try {
        await sequelize.sync(); // Use sync() to create tables if they don't exist
        console.log('Database connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
