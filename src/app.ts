import express from "express";
import kerekparRoutes from "./routes.js";

const app = express();

app.use(express.json());
app.use(kerekparRoutes)

export default app;