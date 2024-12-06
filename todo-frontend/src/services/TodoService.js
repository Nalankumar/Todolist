import axios from 'axios'

const url = "http://localhost:8080/api/todo";
class TodoService{
	getTodos(){
		return axios.get(url);
		
	}

	getTodoById(id){
		return axios.get(`${url}/${id}`);
	}

	postTodo(todo){
		return axios.post(url, todo);
	}

	deleteTodo(todoId){
		return axios.delete(`${url}/${todoId}`);
	}
}

export default new TodoService();