# Task Management App

See it live on [Vercel](https://task-master-omega-eight.vercel.app)

## Introduction

This Task Management App is designed to efficiently manage tasks with a user-friendly interface. It is built using SolidJS, a declarative JavaScript library for creating user interfaces, chosen for its performance benefits and simplicity. This application allows users to create, view, and categorize tasks based on their status and priority.

## Work Breakdown

1. **Task UI Component Development**: Design and implement task cards.
2. **Modal Implementation**: For task creation and editing.
3. **State Management**: Implement SolidJS reactive state for task management.
4. **Styling with Tailwind**: Utilize Tailwind CSS for styling components.
5. **Testing**: Set up Jest for unit testing and write initial tests.
6. **Documentation**: Create README and inline code comments for clarity.

### Assumptions made

- For tasks data I just hard coded an array of `Task`, I will discuss further down a potential backend design
- I did not implement any validation in current Implementation but I would expect to validate the fields on the task prior to creating.

## My Design

I choose to keep a very clean and simple layout
While not requested in the brief, I choose to lay this out in a Kanban style as it felt inline with the product requirements.
![Screenshot - task ](https://github.com/jonniedarko/TaskMaster/assets/3673943/13586cfc-8053-4d77-8e3b-03f4718faa7b)
![Screenshot - task with details open](https://github.com/jonniedarko/TaskMaster/assets/3673943/837c5a97-4e10-4780-a228-ad1142fc3975)
![Screenshot 2024-01-22 at 1 46 24 PM](https://github.com/jonniedarko/TaskMaster/assets/3673943/acc6995a-952a-45dc-8493-ba449fe612bf)

## Documentation

### Frameworks, Libraries, and Tools

- **UI Frameworks:**
  - SolidJS: chosen for its fine-grained reactivity and efficient rendering while still supporting react like JSX making easier for react devs to follow.
  - for notifications https://github.com/ardeora/solid-toast
- **Testing**: Jest - well known and well supported
- **Styling:** Tailwind CSS - for its utility-first approach

### Running the Application Locally

1. Clone the repository to your local machine.
2. Install dependencies using your package manager:
   ```bash
   $ npm install # or pnpm install or yarn install
   ```
3. To start the application in development mode, run:
   ```bash
   $ npm run dev # or npm start
   ```
   Access the app at [http://localhost:3000](http://localhost:3000).
4. To build the app for production, run:
   ```bash
   $ npm run build
   ```
