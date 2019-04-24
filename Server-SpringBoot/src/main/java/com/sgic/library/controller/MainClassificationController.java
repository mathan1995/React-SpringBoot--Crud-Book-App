package com.sgic.library.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.sgic.library.entities.MainClassification;
import com.sgic.library.services.MainClassificationService;

import java.util.List;

@RestController
public class MainClassificationController {

	@Autowired
	MainClassificationService mclService;
	
	
	@PostMapping("/savemcl")
	public HttpStatus createMCL(@Valid @RequestBody MainClassification mcl) {
		mclService.saveMCL(mcl);
		return HttpStatus.CREATED;
	}
	
	@GetMapping("/getmclbyid/{id}")
	public ResponseEntity<MainClassification> findById(@PathVariable("id")long id){
		return new ResponseEntity<MainClassification>(mclService.findMclById(id), HttpStatus.OK);
	}
	@GetMapping("/findAllMain")
	public List<MainClassification> findAll() {
		return mclService.getAllMain();



	}
}
