const express = require("express");
const { addNote, getNotes, removeNode } = require("./notes.controller");
const path = require("path");

const port = 8000;

const app = express();  //создаем приложение 
app.set("view engine", "ejs"); //npm i ejs чтобы html переделать в ejs и ог понимал сунтакс
app.set("views", "pages"); // по умолчанию index.ejs лежит в views но мы его посместили в pages

app.use(express.urlencoded({ extended: true })); // показываем express с какими данными работаем в каком формате мы их принимаем
app.use(express.static(path.join(__dirname, "public"))); // чтобы app.js был доступен этим мы обьявляем public статический 

app.get("/", async (req, res) => {
    res.render("index", {
        title: "Express title",
        notes: await getNotes(),
        created: false,
    });
});
app.post("/", async (req, res) => {
    // console.log(req.body); сдесь должны хранться данные с клиента  но надо научить express с какими данными мы работаем
    await addNote(req.body.title);
    res.render("index", {
        title: "Express title",
        notes: await getNotes(),
        created: true,
    });
});

app.delete(`/:id`, async (req, res) => {
    await removeNode(req.params.id);
    res.render("index", {
        title: "Express title",
        notes: await getNotes(),
        created: false,
    });
});

app.listen(port, () => {   // включаем сервер 
    console.log("server started ...");
});
