import React, {useState} from 'react';
import './App.css';
import tasks from './list.json';
import TasksBar from './components/TasksBar';
import SearchBar from './components/SearchBar';
import NewTask from './components/NewTask';
function App() {
  const [showForm, setShowForm] =useState (false)
  const [allTasks, setAllTasks] =useState(tasks);
 
  const handleDelete =(ele)=>{
    console.log(ele)
    const tasksFilters = allTasks.filter(task => task.id !== ele)
    setAllTasks(tasksFilters)   
  }
  const handleSearch =(ele)=>{ 
    if(ele=== ""){
       setAllTasks(tasks)
    } else{
      const searchTasks = allTasks.filter(task => task.name.toLowerCase().includes(ele.toLowerCase()))
      setAllTasks(searchTasks)
    } 
  }
const newObjectInfo=(newObject)=>{
      setShowForm(showForm=> !showForm)       
      const copyTask =[...allTasks]
      copyTask.push(newObject)
      setAllTasks(copyTask)  
}
    
  const handleSort=()=>{    
     setAllTasks(allTasks =>  [...allTasks].sort((a, b) => b.urgency - a.urgency))
  }
  const handleShowForm=()=>{
      setShowForm(showForm=> !showForm)
  }

  return (
    <div className='container'>    
    <button onClick={()=>handleSort()}>Sort</button>
    {showForm && (
       <NewTask onNewInfo={newObjectInfo}/>
      )
    }        
    <button onClick={handleShowForm}>Add new task</button>           
    <SearchBar onSearch={handleSearch}/>
      {allTasks.map(ele=>{
        return  (
          <div>
             <TasksBar key={ele.id}  tasks={ele}  onDelete={handleDelete}/>
            
          </div>
         
        )       
      })}
    </div>
  );
}
export default App;
