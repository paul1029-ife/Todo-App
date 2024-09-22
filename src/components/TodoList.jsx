import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ items, deleteItem, editItem}) {

  return (
    <ul className='grid grid-cols-3 gap-4 text-center'>
      {items.map((item, index) => <TodoCard key={index} item={item} index={index} deleteItem={deleteItem} editItem={editItem}/>)}
    </ul>
  )
}
