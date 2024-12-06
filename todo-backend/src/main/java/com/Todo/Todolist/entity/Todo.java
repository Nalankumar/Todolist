package com.Todo.Todolist.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "todo")
public class Todo {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long todoId;
	private String name;
	private boolean status;
	
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
	
	public boolean getStatus() {
		return this.status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}
