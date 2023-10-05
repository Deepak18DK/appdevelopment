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

import com.example.demo.model.Income;
import com.example.demo.model.Income;
import com.example.demo.service.IncomeService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="Income Details")
@RequestMapping("/api/v1/income")
public class IncomeController 
{
	@Autowired
	IncomeService incomeService;
	
	@PostMapping("/saveIncome")
	public Income save(@RequestBody Income i)
	{
		return incomeService.saveIncome(i);
	}
	@GetMapping("/getAllIncome")
	public List<Income> getAll()
	{
		return incomeService.getAllIncome();
	}
	
	@GetMapping("/getIncome/{id}")
	public ResponseEntity<Optional<Income>> get(@PathVariable int id)
	{
		Optional<Income> i= incomeService.getIncome(id);
		return ResponseEntity.ok(i);
	}
	@PutMapping("/updateIncome")
	public Income update(@RequestBody Income Income)
	{
		return incomeService.updateIncome(Income);
	}
	@DeleteMapping("/deleteIncome/{id}")
	public void delete(@PathVariable int id)
	{
		incomeService.deleteIncome(id);;
	}
	
}
