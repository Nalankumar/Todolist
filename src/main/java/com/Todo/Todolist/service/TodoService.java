package com.Todo.Todolist.service;

import java.util.Optional;

import com.Todo.Todolist.entity.Todo;


public interface TodoService {
	public Iterable<Todo> findAll();
	public Optional<Todo> findById(Long id);
	public String deleteById(Long id);
	public Todo saveTodo(Todo todo);
	public Todo updateStatus(Long id);
}
