package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_feedback")
public class Feedback {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fid;
	private String name;
	private String email;
	private String subject;
	private String message;

}
