package com.Todo.Todolist.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Todo.Todolist.entity.Todo;
import com.Todo.Todolist.service.TodoService;

@CrossOrigin
@RestController
@RequestMapping("/api/todo")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
	@GetMapping
	public ResponseEntity<Iterable<Todo>> getAllTodo(){
		return new ResponseEntity<>(todoService.findAll(),HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Todo>> getById(@PathVariable("id") Long id){
		return new ResponseEntity<>(todoService.findById(id),HttpStatus.OK);
	}

	@PostMapping("/save")
	public ResponseEntity<Todo> saveTodo(@RequestBody Todo todo) {
		return new ResponseEntity<>(todoService.saveTodo(todo),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") Long id){
		Optional<Todo> existingTodo = todoService.findById(id);
		if(existingTodo.isPresent()) {
			return new ResponseEntity<>(todoService.deleteById(id), HttpStatus.OK);
		}
		return new ResponseEntity<>("Todo not found!", HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Todo> setStatus(@PathVariable Long id){
		Optional<Todo> existingTodo = todoService.findById(id);
		if(existingTodo.isPresent()) {
			return new ResponseEntity<>(todoService.updateStatus(id),HttpStatus.OK);
		}
		return new ResponseEntity<>(null ,HttpStatus.NOT_FOUND);
	}

}
