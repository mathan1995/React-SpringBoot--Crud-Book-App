package com.sgic.library.services;



import com.sgic.library.entities.MainClassification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.sgic.library.entities.SubClassification;
import com.sgic.library.repositories.SubClassificationRepositories;

import java.util.List;

@Service
public class SubClassificationImpl implements SubClassificationService {
	@Autowired
	SubClassificationRepositories sbclRepositories;
	public void saveSbcl(SubClassification sbcl) {
		sbclRepositories.save(sbcl);
	}

	@Override
	public List<SubClassification> getAllSub(){
		return sbclRepositories.findAll();
	}
}
