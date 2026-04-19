import React, { useEffect, useState } from "react";

const getInitialTodos = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

const Home = () => {
  const [todos, setTodos] = useState(getInitialTodos);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editId) {
      // UPDATE TODO
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo,
        ),
      );

      setEditId(null);
    } else {
      // ADD TODO
      const newTodo = {
        id: Date.now(),
        text: input,
        date: new Date().toLocaleString(),
      };

      setTodos((prev) => [newTodo, ...prev]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo..."
            className="flex-1 border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className={`px-4 py-2 text-white rounded transition ${
              editId ? "bg-green-600" : "bg-blue-600"
            }`}
          >
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <ul className="mt-5 space-y-3">
          {todos.length === 0 && (
            <p className="text-center text-gray-400">No todos yet</p>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded hover:shadow transition"
            >
              <div>
                <p className="font-medium">{todo.text}</p>
                <p className="text-xs text-gray-400">{todo.date}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-sm px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
