import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"} min-h-screen transition-all flex flex-col`}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="container mx-auto p-4 max-w-md flex-grow">
        <h1 className="text-center text-3xl font-bold mb-4">To-Do List</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            placeholder="Enter a task..."
            onChange={(e) => setNewTask(e.target.value)}
            className="p-2 border rounded-md text-black w-full"
          />
          <button onClick={addTask} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-400">
            Add
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-400 dark:bg-gray-700 p-2 rounded-md text-lg font-medium text-black">
              {task}
              <button
                onClick={() => removeTask(index)}
                className="bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-600 text-sm"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="text-center mt-4 py-2">
        &copy; {new Date().getFullYear()} Mohammad Hashim
      </footer>
    </div>
  );
}

export default App;
