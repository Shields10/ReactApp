import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


function App() {
const [showAddTask,setShowAddTask]= useState(false); 
  const [tasks,setTasks]= useState([])

useEffect(()=>{
  const getTasks = async () => {
       const tasksFromServer = await fetchTasks()
       setTasks(tasksFromServer)

  }
 
  getTasks()
}, [])

// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch ("http://localhost:5000/tasks")
  const data = await res.json();

  console.log(data);
  return data; 
}
// Fetch Task 
const fetchTask = async (taskid) => {
  const res = await fetch (`http://localhost:5000/tasks/${taskid}`)
  const data = await res.json();

  console.log(data);
  return data; 
}
//Add Task
const addTask = async (task)=>{

  const res = await fetch('http://localhost:5000/tasks/',{

  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks,data])
// const id = Math.floor(Math.random()*1000)+1;
// const newTask = { id, ...task};
// setTasks([...tasks,newTask])

}
//Delete Task

const deleteTask= async (taskid)=>{
await fetch(`http://localhost:5000/tasks/${taskid}`,{
  method: 'DELETE',
})
setTasks(tasks.filter((task)=>task.id!==taskid))
}
// Toggle Reminder

const toggleReminder = async (taskid)=>  {

const taskToToogle =  await fetchTask(taskid)
const updateTask = {...taskToToogle, reminder: !taskToToogle}

const res = await fetch (`http://localhost:5000/tasks/${taskid}`,{
  method:'PUT',
  headers:{
    'Content-type': 'application/json'
  },
  body: JSON.stringify(updateTask)

})

const data = await res.json()


  setTasks(
    tasks.map((task)=>
    task.id===taskid?
    {...task,reminder:data.reminder}:
    task))
}

 
  return (
    <Router>
    <div className="container">
    <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    <Route path='/' exact render={(props) => (
        <>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks to view"}
        </>

    )} />
    <Route path='/about' component ={About}/>
    <Footer />
    </div>
    </Router>
 
  );
}

export default App;
