import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";


export default function App() {
  const [styleCard,setStyleCard]= useState("cardTasks")
  const[object, setObject] = useState([])
  const [name,setName]= useState()
  const [image,setImage]= useState()
  const [description,setDescription]= useState()
  const [urgency,setUrgency]= useState()
  const [type,setType] = useState()
  const [done,setDone] = useState(false)
  const [val, setVal] = useState(0)
  const [opa, setOpa] = useState(0)
  const [isOn, setIsOn] = useState(false);

const handleObject=(e)=>{
  e.preventDefault();
  setObject(object=>object=[{
    name:name,
    image:image,
    description:description,
    urgency:urgency,
    type:type,
    done:done   
  }])
  setStyleCard(styleCard=> styleCard="cardTasks2")

}
  const toggleSwitch = () => {
    setIsOn(true)
   !isOn?setOpa(opa=>opa =0):setOpa(opa => opa =1)
  }
  const coco1 =()=>{
   setVal(val => val =60)
  }
  const coco =()=>{
    setVal(val => val =0)
  }  
  const coco2 =()=>{
    setVal(val => val =-60)
   } 
   const handleDelete =(e)=>{
    console.log(e)

   }
  return (
      <div>
        {object.map(e=>{
          {e.done? e.done="Yes": e.done="No"}
         return  (    
          <motion.div key={e.name} className={styleCard} layaut
          drag
          >         
            <img src={e.image} width={100} height={100} alt></img>
              <span>
                <h3>Name : {e.name}</h3>
                <h3>Description : {e.description}</h3>
                <h3>Urgency : {e.urgency}</h3>
                <h3>Type : {e.type}</h3>
                <h3>Done : {e.done}</h3>
              </span>
                <motion.button onClick={(e)=>handleDelete(e)} className="butonCardsDelete">Delete</motion.button>
            </motion.div>
           
         )       
        })}
    <motion.div className="switch" data-isOn={isOn} onClick={toggleSwitch}
      animate={{
        scale:[0.2,0.6,1.5,1],
        rotate:[30,-320,60,0,0.3]      
      }}    
      drag

    >Create new task
      <motion.h2       
        animate={{
        opacity:opa}} 
      ></motion.h2>     
    <form style={{opacity:opa, zIndex:2}} whileHover={{opacity:1}}>
      <motion.input  type="text" whileHover={{ scale:1.5 }} onHoverStart={()=>{coco2()}}  onHoverEnd={()=>{coco()}} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" value={name}></motion.input>      
      <motion.input  type="text" whileHover={{ scale:1.5 }} onHoverStart={()=>{coco1()}}  onHoverEnd={()=>{coco()}}  onChange={(e)=>{setImage(e.target.value)}} placeholder="Image" value={image}></motion.input>  
      <motion.input  type="text" whileHover={{ scale:1.5 }}  onHoverStart={()=>{coco1()}}  onHoverEnd={()=>{coco()}} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" value={description}></motion.input>
      <motion.input  type="number" whileHover={{ scale:1.5}} onHoverStart={()=>{coco2()}}  onHoverEnd={()=>{coco()}}  onChange={(e)=>{setUrgency(e.target.value)}} placeholder="Urgency" value={urgency}></motion.input>
      <motion.input type="text" whileHover={{ scale:1.5 }} onHoverStart={()=>{coco1()}}  onHoverEnd={()=>{coco()}}  onChange={(e)=>{setType(e.target.value)}} placeholder="Type" value={type}></motion.input>  
      <motion.input type="text" whileHover={{ scale:1.5 }} onHoverStart={()=>{coco1()}}  onHoverEnd={()=>{coco()}}  onChange={(e)=>{setDone(e.target.value)}} placeholder="Done" value={done}></motion.input>         
      <motion.button onClick={(e)=>{handleObject(e)}}
      animate={{rotate:val}}      
      >Add task</motion.button>     
    </form>
    </motion.div>
    </div>
  );
}




