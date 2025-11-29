import express from "express";
import cors from "cors";

import loanRoutes from './routes/loans';
import agentRoutes from './routes/agents';

import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/loans', loanRoutes);
app.use('/agent', agentRoutes);

app.use(errorHandler);

// Health Check
app.get("/", (req, res) => {
    res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
