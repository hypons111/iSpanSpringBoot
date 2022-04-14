package product.model;

import java.util.List;

import product.model.ProductType;

public interface IProductTypeService {

	ProductType selectByID(int id);

	List<ProductType> selectAll();

	ProductType insert(ProductType productType);

}