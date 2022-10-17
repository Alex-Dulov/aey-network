const http = require("http");
const fs = require("fs");
const ws = require("ws");
const { v4: uuidv4 } = require("uuid");
const {writeFile, readFileSync, existsSync} = require("fs");

const PORT = 8888;
const clients = {};
const log = existsSync("messagelog.json") && readFileSync("messagelog.json");
const messages = JSON.parse(log) || [];

// web sockets server
const wss = new ws.Server({
    port: PORT,
}, () => {
    console.log(`Server started on ${PORT}`)
});


// HTTP server
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
// let counter = 0;
const serverHTTP = http.createServer(async (request, response) => {
    // if (request.url !== "/favicon.ico") {
    //     counter++;
    // }
    switch (request.url) {
        case "/":
        case "/first": {
            try {
                const data = await readFile("src/assets/pages/index.html");
                response.write(data);
                response.end();
            } catch(err) {
                response.write("500, some error occured");
                response.end();
            }
            break;
        }
        case "/second": {
            await delay(3000);
            response.write("second");
            response.end();
            break;
        }
        default:
            response.write("404 not found");
            response.end();
    }
});

serverHTTP.listen(8081);


// npx nodemon server.js
// wss.on("connection", (ws) => {
//     const id = uuidv4();
//     clients[id] = ws;
//     console.log("New client", id);
//
//     ws.send(JSON.stringify(messages));
//
//     ws.on("message", function(rawData) {
//         const {name, message} = JSON.parse(rawData);
//         messages.push({name, message});
//         for (const id in clients) {
//             clients[id].send(JSON.stringify([{name, message}]));
//         }
//     });
// });
//
// process.on("SIGINT", () => {
//     wss.close();
//     writeFile("messagelog.json", JSON.stringify(messages), err => {
//         if (err) {
//             console.log(err);
//         }
//         process.exit();
//     })
// });



