import React, { useState } from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ items }) {

  return (
    <ul className='grid grid-cols-3 gap-4 text-center'>
      {items.map(item => <TodoCard item={item} />)}
    </ul>
  )
}
