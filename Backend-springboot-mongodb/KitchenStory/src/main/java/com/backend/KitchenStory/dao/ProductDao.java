package com.backend.KitchenStory.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.backend.KitchenStory.model.Product;
@CrossOrigin(origins = "http://localhost:4200/")
@Repository
@RepositoryRestResource(collectionResourceRel = "item", path = "item")
public interface ProductDao extends MongoRepository<Product, String> {
	
	
	    
	}

