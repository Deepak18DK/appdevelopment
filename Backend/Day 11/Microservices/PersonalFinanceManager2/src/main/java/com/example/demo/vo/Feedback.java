package com.example.demo.vo;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class Feedback {
	private Long fid;
	private String name;
	private String email;
	private String subject;
	private String message;

}
