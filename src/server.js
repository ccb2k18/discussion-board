const express = require("express");
const { Application } = require("express");
const connectToMongoDb = require("./mongoDb");
const errorMiddleware = require("./errorMiddleware");
/** @type {Application} */
const app = express();


async function main() {
    try {
        await connectToMongoDb();
        app.set('view engine', 'ejs');
        app.set("views", `${__dirname}/views`);
        app.use(express.json());
        app.use(express.static("public"));
    
        app.get("/test", (req, res) => res.send("<h1>Hello World!</h1>"));
        app.use(errorMiddleware);
        app.listen("3080", () => console.log("The server is listening on port 3080..."));
    } catch (err) {
        console.error(err);
    }
}

main()
.then()
.catch();

