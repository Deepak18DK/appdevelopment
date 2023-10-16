package com.example.demo.dtoRequest;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class FeedbackRequest {
	private String name;
	private String email;
	private String subject;
	private String message;

}
