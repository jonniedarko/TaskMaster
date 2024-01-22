import { createSignal, type Component, For, Show } from "solid-js";
import { addDays } from "./helpers";
import TaskCard from "./components/TaskCard";
import { Task } from "./types";
import AddTaskModal from "./components/AddTaskModal";
import { startingTasks } from "./services/tasks";
import toast, { Toaster } from "solid-toast";
// Define a globally accessible date
const today = new Date();

const App: Component = () => {
  const [tasks, setTasks] = createSignal(startingTasks);
  const [modalOpen, setModalOpen] = createSignal(false);

  const handleModalClose = (value: Task) => {
    const {
      name = "?",
      priority = "Medium",
      assignee = "me",
      due = addDays(today, 10),
      status = "Not Started",
      description = "",
    } = value;
    console.log("Modal Closed with value:", value);
    const t = {
      name,
      priority,
      assignee,
      due,
      status,
      description,
    };
    const currentTasks = tasks();
    setTasks([...currentTasks, t]);
    setModalOpen(false);
    toast.success(`created new task Task: '${t.name}'`);

    // Handle the value here
  };

  return (
    <div class="m-auto h-full w-full">
      <Toaster />
      <AddTaskModal open={modalOpen} onClose={handleModalClose} />
      <button
        onClick={() => setModalOpen(true)}
        class="rounded-full bg-sky-500 hover:bg-sky-700 h-12 w-12 font-bold text-white text-3xl absolute bottom-5 right-5"
      >
        +
      </button>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <h3>Not Started</h3>
          <For each={tasks().filter((t) => t.status === "Not Started")}>
            {(task, i) => <TaskCard task={task} />}
          </For>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <h3>In Progress</h3>
            <For each={tasks().filter((t) => t.status === "In Progress")}>
              {(task, i) => <TaskCard task={task} />}
            </For>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <h3>Completed</h3>
            <For each={tasks().filter((t) => t.status === "Completed")}>
              {(task, i) => <TaskCard task={task} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
