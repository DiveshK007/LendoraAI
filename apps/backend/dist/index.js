"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const loans_1 = __importDefault(require("./routes/loans"));
const agents_1 = __importDefault(require("./routes/agents"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/loans', loans_1.default);
app.use('/agent', agents_1.default);
app.use(errorHandler_1.errorHandler);
// Health Check
app.get("/", (req, res) => {
    res.json({ status: "ok" });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
