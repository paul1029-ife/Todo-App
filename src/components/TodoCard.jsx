import React from 'react'

export default function TodoCard({ item }) {
  return (
           <li className='p-10 bg-blue-300 rounded-md'>{item}</li>
  );
}