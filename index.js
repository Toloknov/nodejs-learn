const yargs = require("yargs");
const { addNote, printNotes, deleteOnId } = require("./notes.controller.js");

yargs.command({
    command: "add",
    describe: "add note",
    builder: {
        title: {
            type: "string",
            describe: "title add",
            demandOption: true,
        },
    },
    handler({ title }) {
        addNote(title);
    },
});
yargs.command({
    command: "list",
    describe: "show list",
    async handler() {
        await printNotes();
    },
});
yargs.command({
    command: "delete",
    describe: "delete ",
    builder: {
        id: {
            type: "string",
            describe: "delete to id",
            demandOption: true,
        },
    },
    handler({ id }) {
        deleteOnId(id);
    },
});

yargs.parse();
