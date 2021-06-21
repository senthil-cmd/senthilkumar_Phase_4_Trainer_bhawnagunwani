package com.backend.KitchenStory.model;

import org.springframework.data.mongodb.core.mapping.Document;




import org.springframework.data.annotation.Id;

@Document
public class product {
	@Id
	private String Id;
	private int ProductId;
	private String ProductName;
	private String BrandName;
	private String Category;
	private String Desc;
	private int Qty;
	private double Price;
	private String Productimage;

	
	public product(String id, int productId, String productName, String brandName, String category, String desc,
			int qty, double price, String productimage) {
		super();
		Id = id;
		ProductId = productId;
		ProductName = productName;
		BrandName = brandName;
		Category = category;
		Desc = desc;
		Qty = qty;
		Price = price;
		Productimage = productimage;
	}
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public int getProductId() {
		return ProductId;
	}
	public void setProductId(int productId) {
		ProductId = productId;
	}
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public String getBrandName() {
		return BrandName;
	}
	public void setBrandName(String brandName) {
		BrandName = brandName;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	public String getDesc() {
		return Desc;
	}
	public void setDesc(String desc) {
		Desc = desc;
	}
	public int getQty() {
		return Qty;
	}
	public void setQty(int qty) {
		Qty = qty;
	}
	public double getPrice() {
		return Price;
	}
	public void setPrice(double price) {
		Price = price;
	}
	public String getProductimage() {
		return Productimage;
	}
	public void setProductimage(String productimage) {
		Productimage = productimage;
	}
	public product(int productId, String productName, String brandName, String category, String desc, int qty,
			double price, String productimage) {
		super();
		ProductId = productId;
		ProductName = productName;
		BrandName = brandName;
		Category = category;
		Desc = desc;
		Qty = qty;
		Price = price;
		Productimage = productimage;
	}
	public product() {
	}
	
	
	
}
