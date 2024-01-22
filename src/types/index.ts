export type Priority = "High" | "Medium" | "Low";
export type Status = "Not Started" | "In Progress" | "Completed";

export type Task = {
  name: string;
  description?: string;
  priority: Priority;
  assignee: string;
  due: Date;
  status: Status;
};
