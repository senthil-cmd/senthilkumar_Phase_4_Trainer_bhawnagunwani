package com.backend.KitchenStory.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.KitchenStory.model.product;
@Repository
	public interface ProductDao extends MongoRepository< product, String> {
	    
	}

