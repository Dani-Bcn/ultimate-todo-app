import React from 'react'

export default function SearchBar({onSearch}) {
  return (
    <div>
        <input type="text" placeholder="Search tasks" onChange={(e)=>onSearch(e.target.value)}/>               
    </div>
  )
}
