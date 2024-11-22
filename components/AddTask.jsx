"use client";

import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useTasks } from '../context/Context.js';

function AddTask() {

    const { addTask } = useTasks();
    const [description, setDescription] = useState();

    const changeDesc = (event) => {
        setDescription(event.target.value);
    };

    const saveTask = async (e) => {
        e.preventDefault();
        e.target.reset();
        const dataTask = {
            "description": description
        };
        addTask(dataTask);
    }

    return (
        <form className="bg-white p-5 flex align-center justify-between" onSubmit={saveTask} autoComplete="off">
            <input id="desc" onChange={changeDesc} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-3/4 p-2" placeholder="Descripcion de la tarea" required />
            <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg w-1/5 flex items-center justify-center">
                <FaPlusCircle className='sm:me-2' /><span className="hidden sm:inline-block">Agregar</span>
            </button>
        </form>
    )
}

export default AddTask;