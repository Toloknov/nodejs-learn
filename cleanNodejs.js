// on a clean nodejs

// const http = require("http");
// const path = require("path");
// const fs = require("fs/promises");
// const { addNote } = require("./notes.controller");

// const pathBase = path.join(__dirname, "pages");


// const createServer = http.createServer(async (req, res) => {
//     if (req.method === "GET") {
//         const content = await fs.readFile(path.join(pathBase, "index.html"));
//         res.writeHead(200, { "Content-Type": "text/html" });

//         res.end(content);
//     } else if (req.method === "POST") {
//         res.writeHead(200, { "Content-Type": "text/html", charset: "utf-8" });
//         const body = [];
//         req.on("data", (data) => {
//             body.push(Buffer.from(data));
//         });
//         req.on("end", () => {
//             const title = body.toString().split("=")[1].replaceAll("+", " ");
//             console.log(title);
//             addNote(title);
//             res.end(`title : ${title}`);
//         });
//     }
// });

// createServer.listen(3000, () => {
//     console.log("server working");
// });
