package com.backend.KitchenStory.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.backend.KitchenStory.model.Admin;
import com.backend.KitchenStory.model.Product;


	//@CrossOrigin(origins = "http://localhost:4200/")
	@Repository
	@RepositoryRestResource(collectionResourceRel = "service", path = "service")
	public interface AdminDao extends MongoRepository<Admin, String> {
		
		
		    
		
}
