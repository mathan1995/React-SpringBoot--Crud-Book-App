package com.sgic.library.services;

import java.util.List;

import com.sgic.library.entities.Book;


public interface BookService {
	void saveBook(Book book);// save book
	List<Book> getAllBook();		//	Get All Book
	Book findBookById(String id); // find book by id - bookID
	Book deleteBookById(String id);	//	Delete Book
	void updateBook(Book book);		//	Update Book
	
}
