import { v4 as uuid } from "uuid";
const tasksData = [
  {
    id: uuid(),
    taskName: "Set up a Followup reminder",
    deadline: "3 Jul 2021",
    status: "Overdue",
    completion_status: false,
  },
  {
    id: uuid(),
    taskName: "Escalate P1 issues",
    deadline: "8 Jul 2021",
    status: "Upcoming",
    completion_status: false,
  },
  {
    id: uuid(),
    taskName: "Escalate P2 issues",
    deadline: "10 Jul 2021",
    status: "Upcoming",
    completion_status: false,
  },
  {
    id: uuid(),
    taskName: "Remind customer for payment",
    deadline: "6 Jul 2021",
    status: "Completed",
    completion_status: true,
  },
];

export { tasksData };
