package com.Todo.Todolist.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Todo.Todolist.entity.Todo;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Long>{

}
