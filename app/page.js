"use client";

import TaskCard from '@/components/TaskCard';
import AddTask from '@/components/AddTask';
import { useTasks } from '../context/Context.js';


function HomePage() {

  const { tasks } = useTasks();


  return (
    <div>
      <AddTask />
      {tasks.length ? (
        <>
          <h4 className="text-gray-500 mb-2 mt-5">Total de tareas: {tasks.length}</h4>
          <ul>
            {tasks.map((task) => (
              <li key={task._id}>
                <TaskCard task={task}></TaskCard>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="bg-white mb-2 w-100 p-4 rounded-md text-black text-center mt-3">
          <p className="text-gray-600">No existen tareas registradas.</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;