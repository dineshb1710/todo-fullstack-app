package com.dinu.apps.fullstack.todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dinu.apps.fullstack.todo.bean.HelloWorldBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String message() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean getHelloWorldBean() {
		return new HelloWorldBean("Hello World");
	}

	@GetMapping(path = "/hello-world-path/{user}")
	public HelloWorldBean helloWorldPathMessage(@PathVariable String user) {
		return new HelloWorldBean(String.format("Hello World, %s", user));
	}
}
