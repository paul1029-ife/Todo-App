import React from 'react'
export default function TodoInput({ handleChange, input, addTodo }) {
  return (
    <div className='flex gap-4'>
        <input onChange={handleChange} value={input} type="text" className="px-4 py-2 rounded-md border-black border-2" placeholder="Enter a todo" />
        <button className="bg-black text-white px-10 rounded-md" onClick={addTodo}>Add</button>
    </div>
  )
}
