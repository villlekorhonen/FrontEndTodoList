import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);


  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <fieldset>
        <legend>Add New Todo</legend>
      <form onSubmit={addTodo}>
        <label>Date:</label>
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <label>Description:</label>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                
                <td className='date-cell'>
                  {new Date(todo.date).toLocaleDateString('fi-FI')}
                  </td>
                <td className='desc-cell'>{todo.desc}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default App
