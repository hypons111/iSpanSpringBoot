package product.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productType")
public class ProductType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int producttype_ID;

	@Column(name = "producttype_Name")
	// 駝峰式 productType_Name 會自動變 product_type_Name 我屌佢老母
	// 所以屬性要全細階 或者用 (name = "producttype_Name")
	private String productType_Name;

	public ProductType() {
	}

	public ProductType(String name) {
		this.productType_Name = name;
	}

	public int getProductType_ID() {
		return producttype_ID;
	}

	public void setProductType_ID(int productType_ID) {
		this.producttype_ID = productType_ID;
	}

	public String getProductType_Name() {
		return productType_Name;
	}

	public void setPT_Name(String productType_Name) {
		this.productType_Name = productType_Name;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
