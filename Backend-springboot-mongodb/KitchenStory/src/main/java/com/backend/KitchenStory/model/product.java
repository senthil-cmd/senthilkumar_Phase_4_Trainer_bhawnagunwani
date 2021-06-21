package com.backend.KitchenStory.model;

public class product {
	private long Id ;
	private int ProductId;
	private String ProductName;
	private String BrandName;
	private String Category;
	private String Weight;
	private int Qty;
	private double Price;
	private String Productimage;
	
	
	
	public long getId() {
		return Id;
	}
	public void setId(long id) {
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
	public String getWeight() {
		return Weight;
	}
	public void setWeight(String weight) {
		Weight = weight;
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
	public product(int productId, String productName, String brandName, String category, String weight, int qty,
			double price, String productimage) {
		super();
		ProductId = productId;
		ProductName = productName;
		BrandName = brandName;
		Category = category;
		Weight = weight;
		Qty = qty;
		Price = price;
		Productimage = productimage;
	}
	public product() {
		
	}
	
}
