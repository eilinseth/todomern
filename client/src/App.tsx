import './App.css'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'
import AddButton from './components/AddButton'
import DeleteBox from './components/DeleteBox'

function App() {

  return (
    <div >
      <TaskList>
        <TaskCard/>
        <DeleteBox/>
        <AddButton/>
      </TaskList>
     
    </div>
  )
}

export default App
