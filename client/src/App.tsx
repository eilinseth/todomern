import './App.css'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'
import AddButton from './components/AddButton'
// import DeleteBox from './components/DeleteBox'
// import Form from './components/Form'

function App() {

  return (
    <div >
      <TaskList>
        <TaskCard/>
        {/* <DeleteBox/> */}
        <AddButton/>
        {/* <Form/> */}
      </TaskList>
     
    </div>
  )
}

export default App
