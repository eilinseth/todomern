import './App.css'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'

function App() {

  return (
    <div >
      <TaskList>
        <TaskCard/>
      </TaskList>
    </div>
  )
}

export default App
