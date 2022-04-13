package X;

import java.util.List;

import X.ProductType;

public interface IProductTypeService {

	ProductType selectByID(int id);

	List<ProductType> selectAll();

	ProductType insert(ProductType productType);

}