package com.dom_manipulations.intersetCalculator.controller;

import com.dom_manipulations.intersetCalculator.dto.Response;
import com.dom_manipulations.intersetCalculator.dto.TodoResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/calculate")
public class InterestController {

    List<TodoResponse> todoList = List.of(new TodoResponse(2,"shopping","macbook"),
            new TodoResponse(3,"study","dsa"),
            new TodoResponse(4,"study","hey"),
            new TodoResponse(5,"study","any1"),
            new TodoResponse(6,"study","any2"),
            new TodoResponse(7,"study","any3"),
            new TodoResponse(8,"study","any4"));

    @GetMapping(value = "/interest/{p}/{r}/{t}")
    public ResponseEntity<Response> calculateInterest(@PathVariable("p") int p ,
                                                      @PathVariable("r") int r ,
                                                      @PathVariable("t") int t){
        return ResponseEntity.ok(new Response((p*r*t)/100));
    }

    @GetMapping(value = "/fetchTodo")
    public ResponseEntity<List<TodoResponse>> fetchTodo(){
        return ResponseEntity.ok(todoList);
    }

    @GetMapping(value = "/fetchTodo/{id}")
    public ResponseEntity<TodoResponse> fetchTodoById(@PathVariable("id") Integer id){
        TodoResponse todo = todoList.stream().filter((item)->item.getId()==id).findAny().get();e
        return ResponseEntity.ok(todo);
    }

}
