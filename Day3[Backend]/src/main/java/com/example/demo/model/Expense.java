package com.example.demo.model;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="expense")
public class Expense 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int exp_id;
	private Date date;
	private int exp_amount;
	private String category;
	

	
	public Expense() {
		super();
	}
	
	
	public Expense(int exp_id, Date date, int exp_amount, String category, User user) {
		super();
		this.exp_id = exp_id;
		this.date = date;
		this.exp_amount = exp_amount;
		this.category = category;
		
	}


	public int getExp_id() {
		return exp_id;
	}
	public void setExp_id(int exp_id) {
		this.exp_id = exp_id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getExp_amount() {
		return exp_amount;
	}
	public void setExp_amount(int exp_amount) {
		this.exp_amount = exp_amount;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	
	
}
