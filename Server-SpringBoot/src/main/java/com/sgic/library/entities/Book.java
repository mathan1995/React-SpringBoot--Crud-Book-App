package com.sgic.library.entities;

import javax.persistence.Table;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Table(schema = "library_spring", name = "book")
public class Book implements Serializable {
	
	@Id
	String bookId;
	String bookName;
	String bookISBN;
	
	public String getBookISBN() {
		return bookISBN;
	}
	public void setBookISBN(String bookISBN) {
		this.bookISBN = bookISBN;
	}
	
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	
	

	
	
}
