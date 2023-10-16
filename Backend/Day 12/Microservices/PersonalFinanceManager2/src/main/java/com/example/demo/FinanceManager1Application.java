package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;


@EnableFeignClients
@SpringBootApplication
public class FinanceManager1Application {

	public static void main(String[] args) {
		SpringApplication.run(FinanceManager1Application.class, args);
	}

}
