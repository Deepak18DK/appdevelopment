package com.example.demo.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.dtoRequest.FeedbackRequest;
import com.example.demo.vo.Feedback;

@FeignClient(name= "feedback", url= "${application.config.feedback-service.url}")
public interface FeedbackClient {
	 @PostMapping("/add")
	    boolean saveFeedback(@RequestBody FeedbackRequest request);

	    @GetMapping("/get")
	    List<Feedback> getFeedbacks();
}
