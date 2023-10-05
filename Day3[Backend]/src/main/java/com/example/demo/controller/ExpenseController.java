package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Expense;
import com.example.demo.service.ExpenseService;

import io.swagger.v3.oas.annotations.tags.Tag;



@RestController
@Tag(name="Expense Details")
@RequestMapping("/api/v1/expense")
public class ExpenseController 
{
	@Autowired
	ExpenseService expenseService;
	
	@PostMapping("/saveExpense")
	public Expense save(@RequestBody Expense expense)
	{
		return expenseService.saveExpense(expense);
	}
	@GetMapping("/getAllExpense")
	public List<Expense> getAll()
	{
		return expenseService.getAllExpense();
	}
	
	@GetMapping("/getExpense/{id}")
	public ResponseEntity<Optional<Expense>> get(@PathVariable int id)
	{
		Optional<Expense> i= expenseService.getExpense(id);
		return ResponseEntity.ok(i);
	}
	
	@PutMapping("/updateExpense")
	public Expense update(@RequestBody Expense expense)
	{
		return expenseService.updateExpense(expense);
	}
	
	@DeleteMapping("/deleteExpense/{id}")
	public void delete(@PathVariable int id)
	{
		expenseService.deleteExpense(id);;
	}
}
