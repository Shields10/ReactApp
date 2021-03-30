import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks,setTasks]= useState(
    [{
      id:1,
      text:"Doctors Appointment",
      day:"Feb 5th at 2:30PM",
      reminder:true,
  
    },
    {
      id:2,
      text:"Meeting at School",
      day:"Feb 6th at 1:30PM",
      reminder:true,
  
    },
    {
      id:3,
      text:"Food Shooping",
      day:"Feb 5th at 2:30PM",
      reminder:true,
  
    },
  ]
  )

//Delete Task

const deleteTask= (taskid)=>{

setTasks(tasks.filter((task)=>task.id!==taskid))
}
// Toggle Reminder

const toggleReminder = (taskid)=>  {

  setTasks(tasks.map((task)=>task.id===taskid?{...task,reminder:!task.reminder}:task))
}

 
  return (
    <div className="container">
    <Header />
    {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks to view"}
    </div>
 
  );
}

export default App;
