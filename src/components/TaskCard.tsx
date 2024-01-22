import { Component, createSignal } from "solid-js";
import { Task } from "../types";
import { getPriortyColor } from "../helpers";
import { CalendarIcon, ArrowIcon } from "../icons";

const TaskCard: Component<{ task: Task }> = ({ task }) => {
  const [open, setOpen] = createSignal<boolean>(false);
  let priortyColor = getPriortyColor(task.priority);
  return (
    <div
      class={`max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 ${
        task.status === "Completed" && "line-through text-gray-300"
      }`}
    >
      <div class="px-6 py-4">
        <div class={`flex-grow font-bold text-xl mb-2`}>{task.name}</div>
        <div class="flex flex-row">
          <p class="text-base flex-grow flex flex-row">
            <CalendarIcon class="mr-2" />
            {task.due.toLocaleDateString()}
          </p>
          <div class={`font-bold ${priortyColor}`}>{task.priority}</div>
          <button
            class="hover:animate-pulse font-bold"
            onclick={() => setOpen(!open())}
          >
            <ArrowIcon rotate={open} class={`w-6 h-6`} />
          </button>
        </div>
        <div class="">
          <div
            id="content1"
            class={`h-auto transition-all ease-in-out duration-800 ${
              open() ? "max-h-0" : "max-h-48"
            } overflow-hidden`}
          >
            <p>
              <b>Assigned to:</b> {task.assignee}
            </p>
            <p>
              {" "}
              <b>Current status:</b> {task.status}
            </p>
            <p>{task.description ?? ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
