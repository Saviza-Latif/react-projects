
import { useState } from 'react';
import './App.css';
import { Task } from './Tasked';

function App() {
  const [toDoList , settodolist] = useState([]);  //list of tasks
  const [newtask,setnewtask] = useState("");  //new task
  const handleinput = (event) =>
  {
       setnewtask(event.target.value);
  };
  const addnewtask = () =>
  {
    const task={
      id: toDoList.length===0 ? 1 : toDoList[toDoList.length -1].id+1,
      taskName: newtask,
      completed: false
    }
    const newtodolist = [...toDoList,task];   //perivous + newtask
    settodolist(newtodolist);
  };
  const deletetask =(id) =>
  {
    const newtodolist = toDoList.filter((task)=> task.id !== id);
     settodolist(newtodolist)
  }
  const completetask =(id) =>
  {
    settodolist(
    toDoList.map((task) =>
    {
         if(task.id === id)
         {
          return{...task, completed:true};

         }else{
          return task;
         }
    })
  );
  };
  return (
    <div className="App">
      <div className="addTask">
        <h1>TO DO LIST</h1>
        <input onChange={handleinput}/>
        <button onClick={addnewtask}>add task</button>
      </div>
      <div className="list">
         {toDoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} 
          completed ={task.completed}
          deletetask={deletetask}
          completetask={completetask}/>;
         })}
      </div>
    </div>
  );
}

export default App;
