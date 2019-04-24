package com.sgic.library.controller;

import java.util.List;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sgic.library.entities.Book;

import com.sgic.library.services.BookService;
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class BookController {

	@Autowired
	BookService bookService;

	@PostMapping("/saveBook")
	public HttpStatus createBook(@Valid @RequestBody Book book) {
		bookService.saveBook(book);
		return HttpStatus.CREATED;

	}

	@GetMapping("/findAll")
	public List<Book> findAll() {
		return bookService.getAllBook();
	}

	@GetMapping("/geBookById/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable("id") String id){
		return new ResponseEntity<Book>(bookService.findBookById(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteBook/{id}")
	public ResponseEntity<Book> deleteBook(@PathVariable("id") String id) {
		bookService.deleteBookById(id);
		return new ResponseEntity<Book>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/updateBook")
	public ResponseEntity<Book> updateBook(@Valid @RequestBody Book book) {
		bookService.updateBook(book);
		return new ResponseEntity<Book>(book, HttpStatus.OK);
	}
	

}
