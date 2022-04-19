package product.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "product")
@Component
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "PRODUCTID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productid;

	@Column(name = "PRODUCTTYPE")
	private String producttype;

	@Column(name = "PRODUCTNAME")
	private String productname;

	@Column(name = "PRODUCTSTOCK")
	private int productstock;

	@Column(name = "PRODUCTCOST")
	private double productcost;

	@Column(name = "PRODUCTPRICE")
	private double productprice;
	
	@Column(name = "PRODUCTIMAGE")
	private String productimage;

	@Column(name = "PRODUCTDESCRIPTION")
	private String productdescription;

	

	public int getProductid() {
		return productid;
	}

	public void setProductid(int productid) {
		this.productid = productid;
	}

	public String getProducttype() {
		return producttype;
	}

	public void setProducttype(String producttype) {
		this.producttype = producttype;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public int getProductstock() {
		return productstock;
	}

	public void setProductstock(int productstock) {
		this.productstock = productstock;
	}

	public double getProductcost() {
		return productcost;
	}

	public void setProductcost(double productcost) {
		this.productcost = productcost;
	}

	public double getProductprice() {
		return productprice;
	}

	public void setProductprice(double productprice) {
		this.productprice = productprice;
	}

	public String getProductimage() {
		return productimage;
	}

	public void setProductimage(String productimage) {
		this.productimage = productimage;
	}

	public String getProductdescription() {
		return productdescription;
	}

	public void setProductdescription(String productdescription) {
		this.productdescription = productdescription;
	}



	@Override
	public String toString() {
		return "Product [productid=" + productid + ", producttype=" + producttype + ", productname=" + productname
				+ ", productstock=" + productstock + ", productcost=" + productcost + ", productprice=" + productprice
				+ ", productimage=" + productimage + ", productdescription=" + productdescription + "]";
	}

}
