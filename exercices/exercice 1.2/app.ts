import express from "express";

import pizzarouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let requestCount = 0;
app.use((req, _res, next) => {
    if(req.method === "GET"){
        requestCount ++;
        console.log(`Get counter : ${requestCount}`);
    }
    next();
});

app.use("/films", pizzarouter);

export default app;
