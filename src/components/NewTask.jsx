import React , {useState} from 'react'

export default function NewTask({onNewInfo}) {
    const [name,setName] =useState("")
    const [image,setimage] = useState("")
    const [useFul_link,setUseFul_link] = useState("")
    const [urgency, setUrgency] = useState("")
    const [description,setDescription] = useState("")
    const [done,setDone] = useState("")
    
    const handleInfo=(e)=>{
        e.preventDefault() 
        const newObject={
        name:name,
        image:image,
        useFul_link:useFul_link,
        urgency:parseInt(urgency),
        description:description,
        done:done,
    } 
    onNewInfo(newObject)
}
  return (
  
         <form  className='cardForm' onSubmit={handleInfo}>
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
