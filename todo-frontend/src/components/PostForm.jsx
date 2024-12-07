import {useState} from 'react';
import TodoService from './../services/TodoService.js'
export default function PostForm({getTodos}){
	const [todoName, setTodoName] = useState("");
	const handleSubmit = (event)=>{
		event.preventDefault();
		const todo = {
		    		name: todoName,
		    		status: false
		    	}
		TodoService.saveTodo(todo)
		.then((response)=>{
			console.log(response.data)
			getTodos();
		})
		.catch(e=>console.log(e));
	}

	return(
		<>
		    <form className="p-4" onSubmit={handleSubmit}>
				<label
				  htmlFor="todo"
				  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
				>
				  <input
				    type="text"
				    id="todo"
				    placeholder="Todo name"
				    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				  	onChange={(e)=>{
				  		setTodoName(e.target.value);
				  	}

				  }
				  required
				  />

				  <span
				    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
				  >
				    Todo Name
				  </span>
				</label>
		    </form>
		</>
	);
}