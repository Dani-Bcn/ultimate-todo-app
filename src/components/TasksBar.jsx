import React from 'react'

export default function TasksBar({tasks,onDelete}) {
    return (
        <div  className="card">
            <h2>{tasks.name}</h2>
            <img src={tasks.image} alt="coco" /> 
            <a href={tasks.useful_link}>Link</a>
            <h3>{tasks.urgency}</h3>
            <h3>{tasks.description}</h3>
            <h3>{tasks.done}</h3>
          <button onClick={()=>onDelete(tasks.id)}>Delete task</button> 
        </div>         
    )
}
