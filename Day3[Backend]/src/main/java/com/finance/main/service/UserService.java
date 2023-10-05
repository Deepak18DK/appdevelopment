package com.finance.main.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finance.main.dto.response.UserResponse;
import com.finance.main.model.Role;
import com.finance.main.model.User;
import com.finance.main.repository.UserRepo;


@Service

public class UserService {
      
      @Autowired
  	UserRepo userRepository;
  	public User create(User users) {
  		return userRepository.save(users);
  	}
  	public Optional<User> read(Long id){
  		return userRepository.findById(id);
  	}
  	public User update(User users) {
  		return userRepository.save(users);
  		
  	}
  	public void delete(Long Id) {
  		userRepository.deleteById(Id);
  	}
  	public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }
  	private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}