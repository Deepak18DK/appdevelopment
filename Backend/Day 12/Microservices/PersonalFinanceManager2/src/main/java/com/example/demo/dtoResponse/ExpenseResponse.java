package com.example.demo.dtoResponse;

import java.sql.Date;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseResponse {
	private int expId;
	private Date date;
	private int expAmount;
	private String category;


}
