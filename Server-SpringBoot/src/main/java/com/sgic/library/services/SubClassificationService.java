package com.sgic.library.services;

import com.sgic.library.entities.MainClassification;
import com.sgic.library.entities.SubClassification;

import java.util.List;

public interface SubClassificationService {
	void saveSbcl(SubClassification sbcl);// save sbcl
	List<SubClassification> getAllSub();
}
