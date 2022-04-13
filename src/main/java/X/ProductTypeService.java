package X;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import X.IProductTypeDao;
import X.ProductType;

@Transactional
@Service
public class ProductTypeService implements IProductTypeService {

	@Autowired
	private IProductTypeDao productTypeDao;

	public ProductTypeService() {
	}

	public List<ProductType> selectAll() {
		System.out.println("ProductTypeService : selectAll");
		return productTypeDao.selectAll();
	}

	public ProductType selectByID(int id) {
		System.out.println("ProductTypeService : selectByID");
		return productTypeDao.selectByID(id);
	}

	public ProductType insert(ProductType productType) {
		return productTypeDao.insert(productType);
	}

}
