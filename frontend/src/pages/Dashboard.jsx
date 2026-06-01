import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Task Management Dashboard
        </h1>

        <button onClick={logout}>
          Logout
        </button>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <h3>Create New Task</h3>

          <input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br /><br />

          <input
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br /><br />

          <button onClick={createTask}>
            Create Task
          </button>
        </div>

        <h2>My Tasks</h2>

        {tasks.map((task) => (
          <div key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;