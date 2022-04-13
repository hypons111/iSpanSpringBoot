package product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(value = {"classpath:product.properties"}, ignoreResourceNotFound = true) // //從 product.properties 取得 database 資料
public class ISpanBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ISpanBootApplication.class, args);
	}

}
