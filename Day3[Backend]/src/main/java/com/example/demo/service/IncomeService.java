package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Income;
import com.example.demo.repository.IncomeRepository;

@Service
public class IncomeService {

	@Autowired
	IncomeRepository incomeRepository;
	
	public Income saveIncome(Income i)
	{
		return incomeRepository.save(i);
	}
	
	public List<Income> getAllIncome()
	{
		return incomeRepository.findAll();
	}
	
	public Optional<Income> getIncome(int id)
	{
		return incomeRepository.findById(id);
	}
	
	public Income updateIncome(Income income)
	{
		return incomeRepository.save(income);
	}
	
	public void deleteIncome(int id)
	{
		incomeRepository.deleteById(id);
	}
}
