package com.Todo.Todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Todo.Todolist.repository.TodoRepository;

@Service
public class TodoService {
	@Autowired
	private TodoRepository todoRepository;
	
}
