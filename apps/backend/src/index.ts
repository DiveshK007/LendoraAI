import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Lendora Backend Running");
});

app.listen(3001, () => {
    console.log("Backend running on http://localhost:3001");
});
