
  const tasks=[{
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
    id:1,
    text:"Food Shooping",
    day:"Feb 5th at 2:30PM",
    reminder:true,

  },

]


const Tasks = () => {
    return (
        <>
               {tasks.map((tasks)=>(<h1 className="task" key="text.id">
                   {tasks.text}
               </h1>))}
        </>
    )
}

export default Tasks
