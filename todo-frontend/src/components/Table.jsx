import React,{useState, useEffect} from 'react'
import TodoService from '../services/TodoService.js'
import PostForm from './PostForm.jsx'

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
	<>	
		<PostForm getTodos={getTodos}/>
		<div className="overflow-x-auto">
		  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
		    <thead className="ltr:text-left rtl:text-right">
		      <tr>
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
		    		<tr key={todo.todoId}>
		    			<td className="px-4 py-2">
				          <label className="sr-only" htmlFor="status">Status</label>
				          <input className="size-5 rounded border-gray-300" 
				          type="checkbox" 
				          id="status" 
				          defaultChecked={(todo.status)}
				          onClick={() => handleStatus(todo.todoId)}
				          />
				        </td>
				        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{todo.name}</td>
				        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{todo.status?"true":"false"}</td>
				        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
				        	<button onClick={() => deleteTodo(todo.todoId)}>
				        		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				        			<path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
				        		</svg>
				        	</button>
				        </td>
        			</tr>)
		   		}
		    </tbody>
		  </table>
		</div>
	</>	);
}