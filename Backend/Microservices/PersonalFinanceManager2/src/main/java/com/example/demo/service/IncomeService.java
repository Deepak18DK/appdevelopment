package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Expense;
import com.example.demo.model.Income;
import com.example.demo.model.User;
import com.example.demo.repository.IncomeRepository;
import com.example.demo.repository.UserRepository;

@Service
public class IncomeService {

	@Autowired
	IncomeRepository incomeRepository;
	@Autowired
	UserRepository userRepository;
	
	
	public List<Income> getAllIncome()
	{
		return incomeRepository.findAll();
	}
	
	public Optional<Income> getIncome(int id)
	{
		return incomeRepository.findById(id);
	}
	public List<Income> findIncomeByUserId(Long id)
	{
		User findById = userRepository.findByUid(id);
		return findById.getI();
	}
	
	 public Integer calculateTotalIncomeForUser(Long id) {
		 User findById = userRepository.findByUid(id);
		 List<Income> array= findById.getI();
	        int sum = 0;
	        for (Income income : array) {
	            sum += income.getIncAmount();
	        }
	        return sum;
	    }
	
	public boolean saveIncome(Income i,Long id)

	{
		Optional<User> isUserExists = userRepository.findById(id);
        if (isUserExists.isPresent()) {
		var income= Income.builder()
					.incAmount(i.getIncAmount())
					.incCategory(i.getIncCategory())
					.build();
		User user=new User();
		
		 User findById = userRepository.findByUid(id);
		 List<Income> array= findById.getI();
		// System.out.println(findById);
		user.setUid(findById.getUid());
		user.setEmail(findById.getEmail());
		user.setName(findById.getName());
		user.setPassword(findById.getPassword());
		user.setRole(findById.getRole());
		user.setIsEnabled(findById.getIsEnabled());
		user.setE(findById.getE());
		
		array.add(income);
		user.setI(array);
		userRepository.save(user);
		incomeRepository.save(income);
		return true;
		}
        else {
        	return false;
        }
	}
	
	
	
	public Income updateIncome(Income income, int id)
	{
		Optional<Income> i=incomeRepository.findById(id);
		if(i.isPresent())
			return incomeRepository.save(income);
		else 
			return null;
	
	}
	
	public String deleteIncome(int id)
	{
		incomeRepository.deleteById(id);
		return "income deleted sucessfully";
	}
}
