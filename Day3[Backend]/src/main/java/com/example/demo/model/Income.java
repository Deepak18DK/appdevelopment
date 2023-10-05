package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="income")
public class Income {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int inc_id;
	private int inc_amount;

	public int getInc_id() {
		return inc_id;
	}

	public void setInc_id(int inc_id) {
		this.inc_id = inc_id;
	}

	public int getInc_amount() {
		return inc_amount;
	}

	public void setInc_amount(int inc_amount) {
		this.inc_amount = inc_amount;
	}
	
	

	public Income(int inc_id, int inc_amount, User user) {
		super();
		this.inc_id = inc_id;
		this.inc_amount = inc_amount;
		
	}

	public Income() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
