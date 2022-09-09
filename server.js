const ws = require("ws");
const { v4: uuidv4 } = require("uuid");
const {writeFile, readFileSync, existsSync} = require("fs");

const PORT = 8888;
const clients = {};
const log = existsSync("messagelog.json") && readFileSync("messagelog.json");
const messages = JSON.parse(log) || [];

const wss = new ws.Server({
    port: PORT,
}, () => {
    console.log(`Server started on ${PORT}`)
});

// npx nodemon server.js
wss.on("connection", (ws) => {
    const id = uuidv4();
    clients[id] = ws;
    console.log("New client", id);

    ws.send(JSON.stringify(messages));

    ws.on("message", function(rawData) {
        const {name, message} = JSON.parse(rawData);
        messages.push({name, message});
        for (const id in clients) {
            clients[id].send(JSON.stringify([{name, message}]));
        }
    });
});

process.on("SIGINT", () => {
    wss.close();
    writeFile("messagelog.json", JSON.stringify(messages), err => {
        if (err) {
            console.log(err);
        }
        process.exit();
    })
});