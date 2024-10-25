import express from "express";

import pizzarouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", pizzarouter);

export default app;
