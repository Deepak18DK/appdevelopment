package com.example.demo.service;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtoRequest.UserRequest;
import com.example.demo.dtoResponse.UserResponse;
import com.example.demo.model.Expense;
import com.example.demo.model.User;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ExpenseService {

	@Autowired
	ExpenseRepository expenseRepository;
	@Autowired
	UserRepository userRepository;
	
	
	
	public List<Expense> getAllExpense()
	{
		return expenseRepository.findAll();
	}
	
	public Optional<Expense> getExpense(int id)
	{
		return expenseRepository.findById(id);
	}
	
	public List<Expense> findExpenseByUserId(Long id)
	{
		User findById = userRepository.findByUid(id);
		return findById.getE();
	}
	public boolean saveExpense(Expense e,Long id)

	{
		Optional<User> isUserExists = userRepository.findById(id);
        if (isUserExists.isPresent()) {
		var expense= Expense.builder()
					.expAmount(e.getExpAmount())
					.category(e.getCategory())
					.date(e.getDate())
					.build();
		
		User user=new User();
		
		 User findById = userRepository.findByUid(id);
		 List<Expense> array= findById.getE();
		// System.out.println(findById);
		user.setUid(findById.getUid());
		user.setEmail(findById.getEmail());
		user.setName(findById.getName());
		user.setPassword(findById.getPassword());
		user.setRole(findById.getRole());
		user.setIsEnabled(findById.getIsEnabled());
		user.setI(findById.getI());
		
		array.add(expense);
		user.setE(array);
		userRepository.save(user);
		expenseRepository.save(expense);
		return true;
		}
        else {
        	return false;
        }
	}
	
	 public Integer calculateTotalExpenseForUser(Long id) {
		 User findById = userRepository.findByUid(id);
		 List<Expense> array= findById.getE();
	        int sum = 0;
	        for (Expense expense : array) {
	            sum += expense.getExpAmount();
	        }
	        return sum;
	    }
	
	public Expense updateExpense(Expense expense,int id)
	{
		Optional<Expense> e=expenseRepository.findById(id);
		
		if(e.isPresent())
			return expenseRepository.save(expense);
		else 
			return null;
		
	}
	
	public String deleteExpense(int id)
	{
		expenseRepository.deleteById(id);
		return "Expense deleted successfully";
	}
}
