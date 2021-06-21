package com.backend.KitchenStory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.backend.KitchenStory.dao.ProductDao;
import com.backend.KitchenStory.model.product;


@RestController
@RequestMapping(value = "/")
public class ProductRest {
	@Autowired
	ProductDao productdao;
	
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public List<product> getAllUsers() {
		return productdao.findAll(); 
	}
	@RequestMapping(value = "/createProduct", method = RequestMethod.POST)
	public product add(@RequestBody product Products) {
		return productdao.save(Products);
	}
}
