import { v4 as uuid } from "uuid";

const navbarOptions = [
  {
    id: uuid(),
    optionName: "Work Timer",
    enabled: false,
  },
  {
    id: uuid(),
    optionName: "Notes",
    enabled: false,
  },
  { id: uuid(), optionName: "Tasks", enabled: false },
];
export { navbarOptions };
