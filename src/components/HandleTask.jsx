import { useTaskStore } from "../stores/useTaskStore";
import { useState } from "react";

export const HandleTask = () => {
    const { tasks, addTask, removeTask } = useTaskStore();
    const [newTask, setNewTask] = useState("");

    const handleNewTask = () => {
        addTask(newTask);
        setNewTask("");
    };

    return (
        <div>
            <p>Number of tasks right now: {tasks.length}</p>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={task}>
                            {task}{" "}
                            <button onClick={() => removeTask(index)}>
                                Remove task
                            </button>
                        </li>
                    );
                })}
            </ul>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button onClick={handleNewTask}>Add task</button>
        </div>
    );
};