import './App.css'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'
import AddButton from './components/AddButton'
// import DeleteBox from './components/DeleteBox'
// import Form from './components/Form'
import { getTodos } from './api/getTodos'
import { useQuery } from 'react-query'

function App() {

  const {data:todos=[],isLoading} = useQuery('todos',getTodos);

  return (
    <div >
      <TaskList>
        <TaskCard todos={todos} />
        {/* <DeleteBox/> */}
        <AddButton/>
        {/* <Form/> */}
      </TaskList>
     
    </div>
  )
}

export default App
