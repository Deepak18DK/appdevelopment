package com.example.demo.dtoResponse;



import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IncomeResponse {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int incId;
	private int incAmount;
	private String incCategory;

}
