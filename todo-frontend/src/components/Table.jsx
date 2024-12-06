import React,{useState, useEffect} from 'react'
import TodoService from '../services/TodoService.js'

export default function Table(){
	const [todos, setTodos] = useState([])
	
	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = () => {
		TodoService.getTodos().then((response)=>{
			setTodos(response.data);
			console.log(response.data);
		}).catch(err=> console.log(err));
	}

	const deleteTodo = (todoId) => {
		TodoService.deleteTodo(todoId).then((response) => {
			getTodos();
		}).catch(err => console.log(err));
	}
	return( 
	<>
		<div>
		  <table className="table border-5">
		    {/* head */}
		    <thead>
		      <tr>
		        <th></th>
		        <th>Title</th>
		        <th>Status</th>
		        <th></th>
		      </tr>
		    </thead>
		    <tbody>
		    {
		    	todos.map(
		    		todo => 
		    			<tr className="bg-base-200" key={todo.todoId}>
					        <td>{todo.todoId}</td>
					        <td>{todo.name}</td>
					        <td>{todo.status?"true":"false"}</td>
					        <td> <button onClick={() => deleteTodo(todo.todoId)}>delete</button></td>
					    </tr>
				)
		    }
		    </tbody>
		  </table>
		</div>
	</>	);
}