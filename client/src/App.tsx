import './App.css'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'
import AddButton from './components/AddButton'

function App() {

  return (
    <div >
      <TaskList>
        <TaskCard/>
        <AddButton/>
      </TaskList>
    </div>
  )
}

export default App
