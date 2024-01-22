# Task Management App

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

=====

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
