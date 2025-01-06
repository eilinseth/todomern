import './App.css'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'
import AddButton from './components/AddButton'
// import Form from './components/Form'
import { getTodos } from './api/getTodos'
import { useQuery } from 'react-query'
import { useState } from 'react'

function App() {

  const {data} = useQuery('todos',getTodos);
  const [isOpen,setIsOpen] = useState(false)

  function open (){
    setIsOpen(!isOpen)
  }



  return (
    <div >
      <TaskList>
        <TaskCard todos={data} open={open} isOpen={isOpen} />
        <AddButton/>
        {/* <Form/> */}
      </TaskList>
     
    </div>
  )
}

export default App
