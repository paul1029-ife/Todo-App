import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")
  const[items, setItems] = useState([])
  function handleChange(e) {
    setInput(e.target.value)
  }
  function addTodo() {
    if (input.trim() === "") {
      alert("You need to add an Item")
    }
    let previousList=[...items]
    let newListItems = [...previousList, input]
    setItems(newListItems)
    setInput("")
}
  return (
    <>
    <div className="h-screen w-full flex flex-col gap-4 items-center pt-4">
       <TodoInput input={input} handleChange={handleChange} addTodo={addTodo}/>
       <TodoList value={input} items={items}/>
    </div>
    </>
  );
}

export default App;
