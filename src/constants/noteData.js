import { v4 as uuid } from "uuid";
const initialNoteData = { textContent: "" };
const existingNotes = [
  {
    id: uuid(),
    textContent: "Checking the website for customer one",
  },
  {
    id: uuid(),
    textContent: "Inspirational Books List",
  },
];
export { initialNoteData, existingNotes };
