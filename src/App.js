import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.api-ninjas.com/v1/dadjokes';
const API_KEY = 'CN0MYTIPBdgJbiN3fhDyiQ==N3vL0u6FG8CISHN3';  // Your API key here

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [posts, setPosts] = useState("");  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // State to hold the current joke
  const [editIndex, setEditIndex] = useState(null);  // State for tracking item to edit

  // Fetch jokes from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}`, {
          headers: { 'X-Api-Key': API_KEY }
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data[0].joke);  // Adjusted to get the joke from the first item
      } catch (err) {
        setError("There was an error fetching the jokes");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  // Load items from localStorage when the app starts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("list"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Save items to localStorage whenever items state changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("list", JSON.stringify(items));
    }
  }, [items]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function addTodo() {
    if (input.trim() === "") {
      alert("You need to add an Item");
      return;
    }
    
    // If we are editing an item
    if (editIndex !== null) {
      const updatedItems = items.map((item, index) => 
        index === editIndex ? input : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      let newListItems = [...items, input];
      setItems(newListItems);
    }
    setInput("");
  }

  function deleteItem(indexToDelete) {
    setItems(items.filter((_, index) => index !== indexToDelete));
  }

  function editItem(indexToEdit) {
    setInput(items[indexToEdit]);
    setEditIndex(indexToEdit);  // Set the index of the item being edited
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-4 items-center pt-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <TodoInput 
          input={input} 
          handleChange={handleChange} 
          addTodo={addTodo} 
        />
        <TodoList 
          items={items} 
          deleteItem={deleteItem} 
          editItem={editItem}  // Pass editItem prop to TodoList
        />
        
        <button className="px-4 py-2 rounded-md border-black border-2" onClick={() => setPage(page + 1)}>
          Generate Joke
        </button>
        
        {loading ? <p>Loading...</p> 
        : error ? <h1>{error}</h1> 
        : posts ? <div className="p-4 mt-4 border-2 border-blue-300 rounded-md">
            <h2>{posts}</h2>
          </div> : <p>No jokes available</p>
        }
       </div>
    </>
  );
}

export default App;
