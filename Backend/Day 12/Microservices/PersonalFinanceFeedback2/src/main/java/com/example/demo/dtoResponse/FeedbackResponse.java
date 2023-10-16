package com.example.demo.dtoResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class FeedbackResponse {
	
	private Long fid;
	private String name;
	private String email;
	private String subject;
	private String message;


}
