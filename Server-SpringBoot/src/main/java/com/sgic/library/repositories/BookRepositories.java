package com.sgic.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgic.library.entities.Book;


public interface BookRepositories extends JpaRepository<Book, String> {
	Book findBookBybookId(String id);
}
