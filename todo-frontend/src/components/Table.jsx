import React,{useState, useEffect} from 'react'
import TodoService from '../services/TodoService.js'
import PostForm from './PostForm.jsx'
import Delete from './../assets/delete-button.svg'

export default function Table(){
	const [todos, setTodos] = useState([])
	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = () => {
		TodoService.getTodos()
		.then((response)=>{
			setTodos(response.data);
			console.log(response.data);
		})
		.catch(err=> console.log(err));
	}

	const deleteTodo = (todoId) => {
		TodoService.deleteTodo(todoId)
		.then((response) => {
			getTodos();
		})
		.catch(err => console.log(err));
	}

	const handleStatus = (id)=>{
		TodoService.setStatus(id)
		.then((response)=>{
			console.log(response);
			getTodos();
		})
		.catch(e=>console.log(e));
	}

	return( 
	<div className="w-[90%]">	
		<PostForm getTodos={getTodos}/>
		<div className="overflow-x-auto">
		  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
		    <thead className="ltr:text-left rtl:text-right">
		      <tr className="flex flex-row justify-between">
		        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
		        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
		        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
		        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
		      </tr>
		    </thead>

		    <tbody className="divide-y divide-gray-200">		      		 
		      {
		    	todos.map(
		    		todo => 
		    		<tr key={todo.todoId} className="flex flex-row justify-between">
		    			<td className="px-4 py-2 flex justify-be">
				          <label className="sr-only" htmlFor="status">Status</label>
				          <input className="size-5 rounded border-gray-300" 
				          type="checkbox" 
				          id="status" 
				          defaultChecked={(todo.status)}
				          onClick={() => handleStatus(todo.todoId)}
				          />
				        </td>
				        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex-row justify-center">{todo.name}</td>
				        <td className="whitespace-nowrap px-4 py-2 text-gray-700 justify-center">
				        	<button onClick={() => deleteTodo(todo.todoId)}>
				        		<img src={Delete} alt=""/>
				        	</button>
				        </td>
        			</tr>)
		   		}
		    </tbody>
		  </table>
		</div>
	</div>	);
}