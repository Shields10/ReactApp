import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {

    const [text,setTask]=useState('');
    const [day,setDate]=useState('');
    const [reminder,setReminder]=useState(false);


    const onSubmit= (e)=>{
        e.preventDefault();

        if (!text){

            alert("Please fill in the task");
            return;
        }

        onAdd({text,day,reminder});  

          setTask('')
          setDate('')
          setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setTask(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input className="btn btn-block" type="submit" value="Save Task" ></input>
        </form>
    )
}

export default AddTask
