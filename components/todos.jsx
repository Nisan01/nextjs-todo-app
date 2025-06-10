"use client"

import React from 'react'
import { useState } from 'react';

function Todos() {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

  return (
    <div>
        
        <h1 className='bg-black text-white text-center font-bold text-4xl px-1 py-8'>To-dos List</h1>
        
        <form action=""  className='flex gap-4  items-center justify-center'>

<input type="text"  className='border-2 border-blue-600  mt-8 p-2 ' placeholder='Enter your task' value={title} onChange={(e)=>{
    setTitle(e.target.value);
}}/>
<input type="text"  className='border-2 border-blue-600 w-80  mt-8 p-2 ' placeholder='Description' value={description} onChange={(e)=>{
    setDescription(e.target.value);
}} />

<button className='bg-blue-600 text-white px-4 cursor-pointer py-2 mt-8 rounded-md hover:bg-blue-700 transition-colors duration-300'>Add Now</button>
  
        </form>
        </div>

  )
}

export default Todos