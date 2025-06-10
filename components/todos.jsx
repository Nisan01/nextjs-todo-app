"use client"

import React from 'react'
import { useState,useEffect } from 'react';

function Todos() {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [todos, setTodos] = useState([]);

const submitHandler=(e)=>{
e.preventDefault();
  if (title.trim() === '' || description.trim() === '') {
    alert("Both fields are required!");
    return; 
  }

setTodos([...todos,{title,description}]);
console.log(todos);


setTitle('');
setDescription('');
};


const deleteHandler=(i)=>{

  let copyTodos=[...todos];
  copyTodos.splice(i,1);
  setTodos(copyTodos);
}



let renderTodos = <h2 className='font-bold underline'>No Tasks Available</h2>;
  if(todos.length>0){
    renderTodos = todos.map((t, i) => {
  return (
    <li key={i} className="pb-2">
      <div className="flex justify-between items-center px-4 gap-4">
        <div className="w-1/3 text-left font-semibold">{t.title}</div>
        <div className="w-1/2 text-left text-gray-700">{t.description}</div>
        <button
          onClick={() => deleteHandler(i)}
          className="bg-red-600 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
})
}
  







  return (
    <div>
        <div>
        <h1 className='bg-black text-white text-center font-bold text-4xl px-1 py-8'>To-dos List</h1>
        
        <form action="" onSubmit={submitHandler}  className='flex gap-4  items-center justify-center'>

<input type="text"  className='border-2 border-blue-600  mt-8 p-2 ' placeholder='Enter your task' value={title} onChange={(e)=>{
    setTitle(e.target.value);
}}/>
<input type="text"  className='border-2 border-blue-600 w-80  mt-8 p-2 ' placeholder='Description' value={description} onChange={(e)=>{
    setDescription(e.target.value);
}} />

<button  className='bg-blue-600 text-white px-4 cursor-pointer py-2 mt-8 rounded-md hover:bg-blue-700 transition-colors duration-300'>Add Now</button>
  
        </form>
        </div>
        <br />
        <br />
        <hr />
<div className='p-4 px-16 bg-gray-400 text-center mt-8  flex flex-col gap-4 '>
{todos.length>0 && (
<h1 className='text-2xl font-bold underline'>Your Tasks</h1>
)}

<ul>
 
    {renderTodos}
</ul>


</div>


        </div>

  )
}

export default Todos