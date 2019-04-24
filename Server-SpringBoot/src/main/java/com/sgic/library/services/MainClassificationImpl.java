package com.sgic.library.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.sgic.library.entities.MainClassification;

import com.sgic.library.repositories.MainClassificationRepositories;


import java.util.List;

@Service
public class MainClassificationImpl implements MainClassificationService {

	@Autowired
	MainClassificationRepositories mclRepositories;
	
	public void saveMCL(MainClassification mcl) {
		mclRepositories.save(mcl);
	}

	@Override
	public MainClassification findMclById(long id) {
		return mclRepositories.findById(id);
	}

	@Override
    public List<MainClassification> getAllMain(){
        return mclRepositories.findAll();
    }
	

	
	
}
