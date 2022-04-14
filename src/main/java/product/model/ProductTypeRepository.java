package product.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductTypeRepository extends JpaRepository<ProductType, Integer> {
	
	// 使用 sql 語法
	@Query(value = "Select * From ProductType", nativeQuery = true)
	public List<ProductType> selectAll();


	
/*
	public ProductType selectByID(int id) {
		System.out.println("ProductTypeDao: selectByID: " + id);
		Session session = sessionFactory.getCurrentSession();
		return session.get(ProductType.class, id);
	}
	
	public ProductType insert(ProductType productType) {
		System.out.println("ProductTypeDao: insert: " + productType);
		Session session = sessionFactory.getCurrentSession();
		ProductType productTypeResult = session.get(ProductType.class, productType.getProductType_ID());
		if (productTypeResult == null) {
			session.save(productType);
			return productType;
		}
		return null;
	}
*/	
	
}
