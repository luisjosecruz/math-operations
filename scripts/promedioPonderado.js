const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    }
];

const notesWithCredit = notes.map(noteObject => noteObject.note * noteObject.credit);
const sumOfNotesWithCredit = notesWithCredit.reduce((sum = 0, newVal) => sum + newVal);

const credits = notes.map(noteObject => noteObject.credit);
const sumOfCredits = credits.reduce((sum = 0, newVal) => sum + newVal);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioPonderadoNotasConCreditos);