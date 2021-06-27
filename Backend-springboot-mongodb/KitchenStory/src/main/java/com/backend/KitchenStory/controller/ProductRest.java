package com.backend.KitchenStory.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.backend.KitchenStory.dao.AdminDao;
import com.backend.KitchenStory.dao.ProductDao;
import com.backend.KitchenStory.model.Admin;
import com.backend.KitchenStory.model.Product;

@RestController
@RequestMapping("/")
public class ProductRest {
	
	  @Autowired ProductDao productdao;
	  
	  
	  @Autowired MongoTemplate mongoTemplate;
	  
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public List<Product> getallproduct() {
		return productdao.findAll();
	}
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/createProduct", method = RequestMethod.POST)
	public Product addproduct(@RequestBody Product Products) {
		return productdao.save(Products);
	}

	  
}

