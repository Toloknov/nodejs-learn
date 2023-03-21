const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "temp");

function start() {
    if (fsSync.existsSync(basePath)) {
        fs.appendFile(path.join(basePath, "log.txt"), `${process.argv[2]}\n`);
    } else {
        fs.mkdir(basePath);
        fs.writeFile(path.join(basePath, "log.txt"), `${process.argv[2]}\n`);
    }
}
start();
