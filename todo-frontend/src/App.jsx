import TodoService from './services/TodoService.js';
import Table from './components/Table.jsx'
function App() {
  function buttonClick(){
    console.log(TodoService.getTodos()); 
  }
  const data = {
    name:'gw',
    status: false
  }
  return (
    <>
      <Table />
      <button onClick = { buttonClick() }> click me </button>
    </>
  )
}

export default App
