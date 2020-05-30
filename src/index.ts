import express, { Express } from "express";
import router from "./router";

const PORT: number = isNaN(Number(process.env.PORT)) ? 4000 : Number(process.env.PORT);

const useReact = (expressInstance: Express): Express => {
    if (process.env.NODE_ENV === "production") {
        return expressInstance
            .use("/react", express.static(__dirname + "/front/build"))
            .use("/static", express.static(__dirname + "/front/build/static"));
    } else {
        return expressInstance;
    }
};

useReact(express()
    .use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }) // CORSの許可
    .use(express.json()) // add json perser for request body
    .use(express.urlencoded({ extended: true })) // add setting for json perser
    .use(router) // add routing
)
    .listen(PORT, () => { console.log("listening on port " + PORT + "!"); });

