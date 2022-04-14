package product.model;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Transactional
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query(value = "SELECT * FROM Product", nativeQuery = true)
	public List<Product> selectAll();

	@Modifying // 要改動資料庫資料就要加 @Modifying
	@Query(value = "DELETE FROM Product WHERE product_ID = ?1")
	public void delete(int id);
	

}
