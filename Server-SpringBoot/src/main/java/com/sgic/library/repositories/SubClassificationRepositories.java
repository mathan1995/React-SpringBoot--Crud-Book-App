package com.sgic.library.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.library.entities.SubClassification;

public interface SubClassificationRepositories extends JpaRepository <SubClassification, String> 
{

}
