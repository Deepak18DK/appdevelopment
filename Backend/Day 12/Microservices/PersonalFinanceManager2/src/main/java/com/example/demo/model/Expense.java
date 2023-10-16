package com.example.demo.model;

import java.sql.Date;

import com.example.demo.dtoRequest.ExpenseRequest;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="expense")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Expense 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int expId;
	private Date date;
	private int expAmount;
	private String category;

	

	
	
	
}
