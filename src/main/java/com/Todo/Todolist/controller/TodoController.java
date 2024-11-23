package com.Todo.Todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Todo.Todolist.service.TodoService;

@RestController
public class TodoController {
	@Autowired
	private TodoService todoService;
	@GetMapping("/hello")
	public String hello() {
		return "Hello";
	}
}
