package product.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ProductTypeService {

	@Autowired
	private ProductTypeRepository productTypeRepository;

	public List<ProductType> selectAll() {
		System.out.println("ProductTypeService : selectAll");
		return productTypeRepository.selectAll();
	}

//	public ProductType selectByID(int id) {
//		System.out.println("ProductTypeService : selectByID");
//		return productTypeDao.selectByID(id);
//	}

}
