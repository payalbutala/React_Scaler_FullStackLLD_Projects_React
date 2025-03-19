import React  from 'react'
import './App.css'
import TodoList from './components/todolist'
import TodoListInputButton from './components/TodoListInputButton'
import Gallery from './components/Gallery'

function App() {
  return (
    <div>
      <Gallery/>
      <TodoListInputButton />
      <TodoList title="" items={["Roaming 1", "Roaming 2", "Roaming 3", "Roaming 4", "Roaming 5", "Roaming 6"]} myStyles={{color:'blue', size:'14px'}} />
      {/* <TodoList title="Your Todo" items={["Shopping 1", "Shopping 2", "Shopping 3", "Shopping 4", "Shopping 5", "Shopping 6"]} myStyles={{color:'darkviolet', size:'15px'}} /> */}
    </div>
  )
}

export default App
