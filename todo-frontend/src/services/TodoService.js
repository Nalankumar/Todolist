import axios from 'axios'

const url = "http://localhost:8080/api/todo";
class TodoService{
	getTodos(){
		return axios.get(url);
		
	}

	getTodoById(id){
		return axios.get(`${url}/${id}`);
	}

	saveTodo(todo){
		return axios.post(`${url}/save`, todo);
	}

	deleteTodo(todoId){
		return axios.delete(`${url}/${todoId}`);
	}

	setStatus(id){
		return axios.put(`${url}/${id}`);
	}

}

export default new TodoService();