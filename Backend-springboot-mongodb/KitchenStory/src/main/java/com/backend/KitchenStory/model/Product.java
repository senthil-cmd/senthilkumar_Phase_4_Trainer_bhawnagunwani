package com.backend.KitchenStory.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document
public class Product {
	
	
	@Id
	private String id;
	private int productId;
	private String productName;
	private String brandName;
	private String category;
	private String desc;
	private int qty;
	private double price;
	private String productimage;
	
	public String getId() {
		return id;
	}
	
	public int getProductId() {
		return productId;
	}
	public String getProductName() {
		return productName;
	}
	public String getBrandName() {
		return brandName;
	}
	public String getCategory() {
		return category;
	}
	public String getDesc() {
		return desc;
	}
	public int getQty() {
		return qty;
	}
	public double getPrice() {
		return price;
	}
	public String getProductimage() {
		return productimage;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public void setProductimage(String productimage) {
		this.productimage = productimage;
	}
	
}
	
	
	
	

