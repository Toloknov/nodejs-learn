const express = require("express");
const { addNote, getNotes, deleteOnId } = require("./notes.controller");
const path = require("path");

const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "pages");
app.use(express.static(path.resolve(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", async (req, res) => {
    res.render("index", {
        title: "express up",
        notes: await getNotes(),
        created: false,
    });
});

app.post("/", async (req, res) => {
    await addNote(req.body.title);
    res.render("index", {
        title: "express up",
        notes: await getNotes(),
        created: true,
    });
});
app.delete("/:id", async (req, res) => {
    await deleteOnId(req.params.id);
    res.render("index", {
        title: "express up",
        notes: await getNotes(),
        created: false,
    });
});

app.listen(port, () => {
    console.log("server working ...");
});
