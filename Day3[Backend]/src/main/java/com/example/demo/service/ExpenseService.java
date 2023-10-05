package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;

@Service
public class ExpenseService {

	@Autowired
	ExpenseRepository expenseRepository;
	
	public Expense saveExpense(Expense expense)
	{
		return expenseRepository.save(expense);
	}
	
	public List<Expense> getAllExpense()
	{
		return expenseRepository.findAll();
	}
	
	public Optional<Expense> getExpense(int id)
	{
		return expenseRepository.findById(id);
	}
	
	public Expense updateExpense(Expense expense)
	{
		return expenseRepository.save(expense);
	}
	
	public void deleteExpense(int id)
	{
		expenseRepository.deleteById(id);
	}
}
