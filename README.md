# Todo List

A lightweight task management application built with React. Add tasks to your list and remove them with a single click.

## Live Demo

[https://ksamavati.github.io/todoList](https://ksamavati.github.io/todoList)

## Features

- **Add tasks** – Type a task into the input field and submit the form to add it to the list.
- **Delete tasks** – Click any task to remove it from the list instantly.
- **Empty-state message** – When there are no tasks remaining, a friendly message is displayed.

## Built With

- [React 18](https://reactjs.org/) – UI library
- [Materialize CSS](https://materializecss.com/) – Styling and layout
- [Create React App](https://create-react-app.dev/) – Project bootstrapping
- [GitHub Pages](https://pages.github.com/) – Hosting

## Project Structure

```
src/
├── App.js          # Root component; manages todo state (add / delete)
├── AddTodo.js      # Controlled form component for creating new tasks
├── Todos.js        # Renders the list of tasks
├── index.css       # Global styles
└── index.js        # Application entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher) and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ksamavati/todoList.git
cd todoList

# Install dependencies
npm install
```

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will reload automatically when you make changes.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the app in development mode |
| `npm test` | Run the test suite in interactive watch mode |
| `npm run build` | Build the app for production into the `build/` folder |
| `npm run deploy` | Deploy the production build to GitHub Pages |

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request.

Please keep changes focused and include a clear description of what was added or changed.

## License

This project is open source and available under the [MIT License](LICENSE).
