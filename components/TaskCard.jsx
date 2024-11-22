"use client";

import React, { useState } from "react";
import { FaRegCalendarCheck, FaPencilAlt, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { useTasks } from '../context/Context.js';

function TaskCard({ task }) {

  const { deleteTask, updateTask } = useTasks();
  const [description, setDescription] = useState();
  const [isEditing, setIsEditing] = useState(false);

  async function remove() {
    deleteTask(task._id);
  }

  function setEdit() {
    setDescription(task.description);
    setIsEditing(true);
  }

  async function save() {
    const data = {
      "description": description
    };
    setIsEditing(false);
    updateTask(task._id, data);
  }

  return (
    <div className="bg-white mb-3 w-100 p-4 rounded-md text-black flex justify-between items-center">
      {isEditing ? (
        <input value={description} onChange={(e) => setDescription(e.target.value)} id="desc" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-3/5 p-2" placeholder="Descripcion de la tarea" required />
      ) : (
        <h3 className="font-bold capitalize flex items-center leading-none"><FaRegCalendarCheck className="me-3" />{task.description}</h3>
      )}

      <div className='w-2/5 flex justify-end'>
        {isEditing ? (
          <>
            <button onClick={save} type="button" className="flex items-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
              <FaCheckCircle className="me-3" />Guardar
            </button>
            <button onClick={() => setIsEditing(false)} type="button" className="flex items-center text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button onClick={setEdit} type="button" className="flex items-center text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <FaPencilAlt className="sm:me-3" /><span className="hidden sm:inline-block">Editar</span>
            </button>
            <button onClick={remove} type="button" className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600">
              <FaTrashAlt />
            </button>
          </>
        )}




      </div>
    </div>
  )
}

export default TaskCard;