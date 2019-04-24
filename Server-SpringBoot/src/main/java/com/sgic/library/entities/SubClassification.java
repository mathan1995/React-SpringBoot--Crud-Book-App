package com.sgic.library.entities;

import javax.persistence.Table;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
@Table(schema = "library_spring", name = "subclassification")
public class SubClassification implements Serializable {
	
	@Id
	private String sbclId;
	private String sbclName;
	
	@ManyToOne
	@JoinColumn(name = "mclID", nullable = false)
	MainClassification mainClassification;

	public String getSbclId() {
		return sbclId;
	}

	public void setSbclId(String sbclId) {
		this.sbclId = sbclId;
	}

	public String getSbclName() {
		return sbclName;
	}

	public void setSbclName(String sbclName) {
		this.sbclName = sbclName;
	}

	public MainClassification getMainClassification() {
		return mainClassification;
	}

	public void setMainClassification(MainClassification mainClassification) {
		this.mainClassification = mainClassification;
	}

	
}