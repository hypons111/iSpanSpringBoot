package X;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import product.model.Product;

public interface IProductService {

	Product selectByID(int id);

	List<Product> selectAll();

	Product insert(Product product);

	void insertImage(HttpServletRequest request, Product product, MultipartFile imageFile) throws IllegalStateException, IOException;
	
	Product update(Product product);
//	Product update(int id, String name, String type, int stock, double cost, double price, String image);

	boolean delete(int id);

}