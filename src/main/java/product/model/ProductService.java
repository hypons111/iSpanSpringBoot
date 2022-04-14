package product.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> selectAll() {
		return productRepository.selectAll();
	}

	public void delete(int id) {
		productRepository.delete(id);
	}

//	public Product selectByID(int id) {
//		System.out.println("ProductService : selectByID");
//		return productDao.selectByID(id);
//	}
//
//	public Product insert(Product product) {
//		return productDao.insert(product);
//	}
//
//	public Product update(Product product) {
//		return productDao.update(product);
//	}
////	public Product update(int id, String name, String type, int stock, double cost, double price, String image) {
////		System.out.println("ProductService: " + "update: ");
////		return productDao.update(id, name, type, stock, cost, price, image);
////	}
//

//
//	public void insertImage(HttpServletRequest request, Product product, MultipartFile imageFile)
//			throws IllegalStateException, IOException {
//		productDao.insertImage(request, product, imageFile);
//
//	}
}
