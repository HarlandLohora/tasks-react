import React, { useState } from "react";
import Task from "../Task";
import "./styles.css";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const actualizarTarea = (elId) => {
    // console.log("Actualizar", elId);
    //1. Hacemos una copia del arreglo [...arreglo]
    const cpTasks = [...tasks];
    // console.log(cpTasks);
    //2. Modificamos el arreglo
    const newTasks = tasks.map((tarea) => {
      // console.log(tarea);
      if (tarea._id === elId) {
        tarea.isDone = !tarea.isDone;
      }
      return tarea;
    });

    setTasks(newTasks);
  };

  const tareasCompletadas = () => {
    console.log("Cuentale");
    //filter recorre el arreglo y nos regresa un nuevo arreglo
    const completadas = tasks.filter((tarea) => tarea.isDone);
    console.log(completadas);
    return completadas.length;
  };

  return (
    <div>
      <p>
        ToDoList
        <strong>
          {tareasCompletadas()}/{tasks.length}
        </strong>
      </p>
      {/* Usamos .map para recorrer un array */}
      <div className="renglon">
        {tasks.map((task) => {
          return (
            <Task
              key={task._id}
              tarea={task}
              actualizarTarea={actualizarTarea}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
