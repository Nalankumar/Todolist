package com.Todo.Todolist.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
	
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http
				.authorizeHttpRequests((requests)-> requests
						.requestMatchers("/","/home").permitAll()
						.anyRequest().authenticated()
						)
				.logout((logout)->logout.permitAll())
				.build();
	}
}
