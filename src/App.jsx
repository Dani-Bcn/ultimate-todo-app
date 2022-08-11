import React, {useState} from 'react';
import './App.css';
import tasks from './list.json';
function App() {
  const [showForm, setShowForm] =useState (false)
  const [allTasks, setAllTasks] =useState(tasks);
  const [name,setName] =useState("")
  const [image,setimage] = useState("")
  const [useFul_link,setUseFul_link] = useState("")
  const [urgency, setUrgency] = useState("")
  const [description,setDescription] = useState("")
  const [done,setDone] = useState("")
  const handleDelete =(ele)=>{
    console.log(ele)
    const tasksFilters = allTasks.filter(task => task.id !== ele)
    setAllTasks(tasksFilters)   
  }
  const handleSearch =(ele)=>{ 
    if(ele.target.value === ""){
       setAllTasks(tasks)
    } else{
      const searchTasks = allTasks.filter(task => task.name.toLowerCase().includes(ele.target.value.toLowerCase()))
      setAllTasks(searchTasks)
    } 
  }
  const newInfo=(e)=>{
    setShowForm(showFormA=> !showForm)
        e.preventDefault() 
        const newObject={
        name:name,
        image:image,
        useFul_link:useFul_link,
        urgency:parseInt(urgency),
        description:description,
        done:done,
    }
      const copyTask =[...allTasks]
      copyTask.push(newObject)
      setAllTasks(copyTask)
      console.log(newObject)
  }
  const handleSort=()=>{    
     setAllTasks(allTasks =>  [...allTasks].sort((a, b) => b.urgency - a.urgency))
  }
  const handleShowForm=()=>{
    console.log(showForm)
      setShowForm(showFormA=> !showForm)
  }

  return (
    <div className='container'>    
    <button onClick={()=>handleSort()}>Sort</button>
    <input type="text" placeholder="Search task" onChange={handleSearch}/>     
    <button onClick={handleShowForm}>Add new task</button>
    
      {showForm && (
        <form  className='cardForm' action="" onSubmit={newInfo}>
        <h2>Add new task</h2>
        <input type="text"  placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text"  placeholder="Enter image" value={image} onChange={(e)=>{setimage(e.target.value)}}/>
        <input type="text"  placeholder="Enter useFul_link" value={useFul_link} onChange={(e)=>{setUseFul_link(e.target.value)}}/>
        <input type="text"  placeholder="Enter urgency" value={urgency} onChange={(e)=>{setUrgency(e.target.value)}}/>
        <input type="text"  placeholder="Enter Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type="text"  placeholder="Enter done" value={done} onChange={(e)=>{setDone(e.target.value)}}/>
        <button type='submit'>Submit</button>
      </form>   
      )
    }
      
      
           
   
      {allTasks.map(ele=>{
        return  (
          <div  key={ele.id} className="card">
            <h2>{ele.name}</h2>
            <img src={ele.image} alt="coco" /> 
            <a href={ele.useful_link}>Link</a>
            <h3>{ele.urgency}</h3>
            <h3>{ele.description}</h3>
            <h3>{ele.done}</h3>
            <button onClick={()=>handleDelete(ele.id)}>Delete task</button>
          </div>         
        )       
      })}
    </div>
  );
}
export default App;
