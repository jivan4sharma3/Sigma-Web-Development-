import React, { useState ,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';



const App = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }




  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  return (
    <>
      <div className="container mx-auto my-10 p-6 rounded-xl bg-gradient-to-b shadow-lg min-h-[80vh]">
        {/* <!-- Add Todo Section --> */}
        <div className="addTodo mb-8">
          <h1 className='text-2xl font-bold text-purple-800 mb-4'>Add a Todo</h1>
          <div className="flex gap-3">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Enter your task..."
              className="flex-1 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm"
            />
            <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md">
              Add
            </button>
          </div>
        </div>

        {/* <!-- Todos List Section --> */}
        <h1 className='text-xl font-semibold text-purple-700 mb-4'>Your Todos</h1>
        <div className="todos flex flex-col gap-4">
          {todos.map((item, index) => {
            return (
              <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                {/* <div className="text-gray-800 font-medium" > {item.todo} </div> */}
                <div className="flex gap-3">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                  <div className={item.isConpleted ? "line-through" : ""} >  {item.todo} </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={(e) => handleEdit(e, item.id)} className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors shadow-sm">Edit</button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors shadow-sm">Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </>
  )
}

export default App
