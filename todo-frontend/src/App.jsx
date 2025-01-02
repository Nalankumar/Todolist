import TodoService from './services/TodoService.js';
import Table from './components/Table.jsx'

function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-screen">
      <h1 className="p-4 font-bold text-xl">Todo App</h1>
      <Table />
    </div>
  )
}

export default App
