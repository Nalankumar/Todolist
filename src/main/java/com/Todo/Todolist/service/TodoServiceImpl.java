package com.Todo.Todolist.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Todo.Todolist.entity.Todo;
import com.Todo.Todolist.repository.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService{
	@Autowired
	private TodoRepository todoRepository;
	
	public Iterable<Todo> findAll(){
		return todoRepository.findAll();
	}
	public Optional<Todo> findById(Long id) {
		return todoRepository.findById(id);
	}
	
	public String deleteById(Long id) {
		 todoRepository.deleteById(id);
		 return "Todo deleted successfully!";
	}
	
	public Todo saveTodo(Todo todo) {
		return todoRepository.save(todo);
	}
	
	public Todo updateStatus(Long id){
		Todo todo = todoRepository.findById(id).get();
		todo.setStatus(!todo.getStatus());
		return todoRepository.save(todo);
	}
}