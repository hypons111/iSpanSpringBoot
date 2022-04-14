package product.model;

import java.util.List;

import product.model.ProductType;

public interface IProductTypeDao {

	ProductType selectByID(int id);

	List<ProductType> selectAll();

	ProductType insert(ProductType productType);

}