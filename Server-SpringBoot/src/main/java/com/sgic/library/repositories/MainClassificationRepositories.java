package com.sgic.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.sgic.library.entities.MainClassification;

public interface MainClassificationRepositories extends JpaRepository <MainClassification, Long> {
	MainClassification findById(long id); // find by id
}
