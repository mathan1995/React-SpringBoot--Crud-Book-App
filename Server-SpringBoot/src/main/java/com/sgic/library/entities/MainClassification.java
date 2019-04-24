package com.sgic.library.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

import java.io.Serializable;
import java.util.List;


@Entity
@Table(schema = "library_spring", name = "mainclassification")
public class MainClassification implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	Long mclID;
	String mclName;

	@JsonBackReference
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "mainClassification", cascade = {CascadeType.ALL})
	private List<SubClassification> subClassification;

	public Long getMclID() {
		return mclID;
	}

	public void setMclID(Long mclID) {
		this.mclID = mclID;
	}

	public String getMclName() {
		return mclName;
	}

	public void setMclName(String mclName) {
		this.mclName = mclName;
	}

	public List<SubClassification> getSubClassification() {
		return subClassification;
	}

	public void setSubClassification(List<SubClassification> subClassification) {
		this.subClassification = subClassification;
	}

	


	

	
	
}