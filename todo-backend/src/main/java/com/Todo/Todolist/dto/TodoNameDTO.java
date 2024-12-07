package com.Todo.Todolist.dto;

public class TodoNameDTO {
	private Long todoId;
	private String name;
	
	public void setTodoId(Long todoId) {
		this.todoId = todoId;
	}
	
	public Long getTodoId() {
		return this.todoId;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
	

}
