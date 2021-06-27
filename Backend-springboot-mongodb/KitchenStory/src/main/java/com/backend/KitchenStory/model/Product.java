package com.backend.KitchenStory.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document
public class Product {
	
	
	
	@Id
	private String id;
	private String productName;
	private String type;
	private String desc;
	private String productimage;
	private int height;
	private int width;
	private double price;
	private int rating;
	public String getId() {
		return id;
	}
	public String getProductName() {
		return productName;
	}
	public String getType() {
		return type;
	}
	public String getDesc() {
		return desc;
	}
	public String getProductimage() {
		return productimage;
	}
	public int getHeight() {
		return height;
	}
	public int getWidth() {
		return width;
	}
	public double getPrice() {
		return price;
	}
	public int getRating() {
		return rating;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public void setType(String type) {
		this.type = type;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public void setProductimage(String productimage) {
		this.productimage = productimage;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
}
	
	
	
	

