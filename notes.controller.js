const fs = require("fs/promises");
const path = require("path");

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
    const notes = await getNotes();
    const note = { title: title, id: Date.now().toString() };
    notes.push(note);
    fs.writeFile(notesPath, JSON.stringify(notes));
}
async function getNotes() {
    const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}
async function printNotes() {
    const notes = await getNotes();
    notes.forEach((note) => {
        console.log(note);
    });
}

async function deleteNotes(id) {
    const notes = await getNotes();
    const newNotes = notes.filter((note) => note.id !== id);
    fs.writeFile(notesPath, JSON.stringify(newNotes));
}
module.exports = {
    addNote,
    printNotes,
    getNotes,
    deleteNotes,
};
