import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';

config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api', router);

app.get('/', (req, res) => {
    res.json("Quiz App API is running!");
});

// ✅ Start server immediately
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// ✅ Connect DB separately
connect()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("DB connection failed:", err));
