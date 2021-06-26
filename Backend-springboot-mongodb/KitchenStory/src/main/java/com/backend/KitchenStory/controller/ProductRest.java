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

import com.backend.KitchenStory.dao.ProductDao;
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

//	@RequestMapping(value = "/product/{id}", method = RequestMethod.GET) 
//	public Product getproduct(@PathVariable("id") String id) { 
//	  Optional<Product> prd = productdao.findById(id);
//	  if(prd.isPresent()) {
//	  Product p = prd.get();
//	  return p;
//	  }
//	  return null;

}
	  

//	@RequestMapping(value="{id}",method=RequestMethod.DELETE)public void
//
//	deleteproduct(@PathVariable String id) { // = productdao.findById(id).get();
//	  //productdao.delete(prd); System.out.println(id); String _id =id; product prd
//	  = mongoTemplate.findById(id,product.class); }
//	 
//}
