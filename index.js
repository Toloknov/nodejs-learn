const yargs = require("yargs");
const { deleteNotes, printNotes, addNote } = require("./notes.controller");

yargs.command({
    command: "add",
    describe: "add new note  to list",
    builder: {
        title: {
            type: "string",
            describe: "added command",
            demandOption: true,
        },
    },
    handler({ title }) {
        addNote(title);
    },
});
yargs.command({
    command: "delete",
    describe: "delete note",
    builder: {
        id: {
            type: "string",
            describe: "id item",
            demandOption: true,
        },
    },
    async handler({ id }) {
        const notes = await deleteNotes(id);
        console.log("empty array", notes);
    },
});
yargs.command({
    command: "list",
    describe: "print all notes",
    async handler() {
        await printNotes();
    },
});
yargs.parse();
