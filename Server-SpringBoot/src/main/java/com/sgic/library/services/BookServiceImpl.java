package com.sgic.library.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.library.entities.Book;
import com.sgic.library.repositories.BookRepositories;

@Service
public class BookServiceImpl implements BookService {
	@Autowired
	BookRepositories bookRespository;
	
	public void saveBook(Book book) {
		bookRespository.save(book);
	}
	
	@Override
	public List<Book> getAllBook(){
		return bookRespository.findAll();
	}
	
	
	@Override
	public Book findBookById(String id) {
		// TODO Auto-generated method stub
		return bookRespository.findBookBybookId(id);
	}
	
	public Book deleteBookById(String id) {
		bookRespository.deleteById(id);
		 return null;
	}

	@Override
	public void updateBook(Book book) {
		bookRespository.save(book);		
	}


}
