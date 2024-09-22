import React from 'react'

export default function TodoCard({ item, deleteItem, index, editItem }) {
  return (
           <li className='p-10 bg-blue-300 rounded-md'>
            {item}
           <div className='flex  pt-3 justify-between'>
            <button className='bg-blue-100 px-3 py-1 rounded-md' onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>❌</button>
           </div>
           </li>
  );
}