import dotenv from 'dotenv'
import express from 'express'
import connectToDB from './database/db.js';
import authRoutes from './routes/auth-routes.js';
connectToDB();
dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT ;


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

