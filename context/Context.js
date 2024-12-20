"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const API_URL = '/api';

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) alert('Debe contener un Provider');
    return context
}

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    async function getTasks() {
        const res = await fetch(`${API_URL}/tasks`);
        const data = await res.json();
        setTasks(data.data);
    };

    async function addTask(dataTask) {
        try {
            let config = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataTask),
            };

            await fetch(`${API_URL}/tasks`, config).then((res) => {
                if (res.ok) {
                    toast.success("Tarea agregada.", {
                        autoClose: 2000
                    });
                    getTasks()
                } else {
                    res.json().then((json) => {
                        alert(json.error);
                    });
                }
            });
        } catch (error) {
            alert(error);
        };
    };

    async function deleteTask(id) {
        try {
            let config = {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            };
            await fetch(`${API_URL}/tasks/${id}`, config).then(res => {
                if (res.ok) {
                    toast.success("Tarea eliminada.", {
                        autoClose: 2000
                    });
                    getTasks()
                } else {
                    res.json().then((json) => {
                        alert(json.error);
                    });
                }
            });
        } catch (error) {
            alert(error);
        }
    };

    async function updateTask(id, dataTask) {
        try {
            let config = {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataTask)
            };
            await fetch(`${API_URL}/tasks/${id}`, config).then(res => {
                if (res.ok) {
                    toast.success("Se actualizo la tarea.", {
                        autoClose: 2000
                    });
                    getTasks()
                } else {
                    res.json().then((json) => {
                        alert(json.error);
                    });
                }
            });
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);



    return <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
        {children}
    </TaskContext.Provider>

}