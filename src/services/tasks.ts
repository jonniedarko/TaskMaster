import { Task } from "../types";
import { addDays } from "../helpers";
const today = new Date();
export const startingTasks: Task[] = [
  {
    name: "Task 1",
    priority: "High",
    assignee: "John Doe",
    due: addDays(today, 3),
    description:
      "This is a very complex task that will take a very long time to do. It should have all the information",
    status: "Not Started",
  },
  {
    name: "Task 2",
    priority: "Medium",
    assignee: "Jane Doe",
    due: addDays(today, 2),
    status: "In Progress",
  },
  {
    name: "Task 3",
    priority: "Low",
    assignee: "Alice Johnson",
    due: addDays(today, -1),
    status: "Completed",
  },
  {
    name: "Task 4",
    priority: "High",
    assignee: "Bob Smith",
    due: addDays(today, 3),
    status: "Not Started",
  },
  {
    name: "Task 5",
    priority: "Medium",
    assignee: "Charlie Brown",
    due: addDays(today, 4),
    status: "In Progress",
  },
  {
    name: "Task 6",
    priority: "Low",
    assignee: "Diana Prince",
    due: addDays(today, 1),
    status: "Completed",
  },
  {
    name: "Task 7",
    priority: "High",
    assignee: "Ethan Hunt",
    due: addDays(today, 6),
    status: "Not Started",
  },
  {
    name: "Task 8",
    priority: "Medium",
    assignee: "Fiona Glenanne",
    due: addDays(today, 7),
    status: "In Progress",
  },
  {
    name: "Task 9",
    priority: "Low",
    assignee: "George Lucas",
    due: addDays(today, 2),
    status: "Completed",
  },
  {
    name: "Task 10",
    priority: "High",
    assignee: "Hannah Abbott",
    due: addDays(today, 3),
    status: "Not Started",
  },
];

// bare bones thoughts for  restfull client
/*
class TaskService {
  constructor() {
    this._tasks = startingTasks
  }

  getTasks(): Task[] {

  }

  add(task:Task): void {

    POST<Task> to `/api/tasks`
  }

}
*/
