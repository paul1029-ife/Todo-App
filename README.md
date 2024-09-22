# Todo List & Joke Generator App

This is a simple **Todo List** app built with **React** that allows users to manage their tasks by adding, editing, and deleting items. The app also has a feature to generate random dad jokes from an external API.

## Features

- **Add Todo:** Add tasks to your list.
- **Edit Todo:** Edit existing tasks in the list.
- **Delete Todo:** Remove tasks from the list.
- **LocalStorage:** Todos are saved to localStorage so they persist after refreshing the page.
- **Random Dad Jokes:** Fetch random dad jokes from an external API and display them.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **API Ninjas**: For fetching random dad jokes from their joke API.
- **localStorage**: For persisting the todo list across browser sessions.

## Getting Started

### Prerequisites

Before you can run this project locally, ensure you have the following installed on your system:

- **Node.js** (version 14 or above)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-joke-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-joke-app
   ```

3. **Install the dependencies:**

   If you're using npm:

   ```bash
   npm install
   ```

   Or, if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. **Start the development server:**

   If you're using npm:

   ```bash
   npm start
   ```

   Or, if you're using yarn:

   ```bash
   yarn start
   ```

2. **Open the app in the browser:**

   The app will be available at:

   ```
   http://localhost:3000
   ```

### Folder Structure

- **/components**: Contains the `TodoList.js` and `TodoInput.js` components for managing todos.
- **/public**: Static assets and the `index.html` file.
- **/src**: Main source code including the `App.js`.

## API Integration

The app fetches random dad jokes from the **API Ninjas** platform. 

- **Base URL**: `https://api.api-ninjas.com/v1/dadjokes`
- **API Key**: To use the app, you need to add your own API key in the `App.js` file:

  ```javascript
  const API_KEY = 'YOUR_API_KEY';  // Replace with your own API key
  ```

  Make sure you replace `'YOUR_API_KEY'` with your valid key.

## Usage

- Enter a todo item in the input field and click "Add Todo" to add it to the list.
- Click "Edit" next to any item to modify it.
- Click "Delete" to remove an item.
- Click the "Generate Joke" button to display a random dad joke.
- Jokes are fetched from the **API Ninjas** platform and displayed below the button.

## Screenshot

![App Screenshot](link-to-screenshot.png)

## Contributing

Feel free to fork this project and submit pull requests if you have any improvements or suggestions.

### To contribute:

1. Fork the project
2. Create a new branch for your feature (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add a feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Create a Pull Request

---

Enjoy building more features into your Todo & Joke Generator app!

