package product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import product.model.Product;
import product.model.ProductService;
import product.model.ProductType;
import product.model.ProductTypeService;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;
	@Autowired
	private ProductTypeService productTypeService;
	
	@GetMapping("/productjson")
	@ResponseBody
	public List<Product> productJson(){
		return productService.selectAll();
	}
	
	@GetMapping("/producttypejson")
	@ResponseBody
	public List<ProductType> productTypeJson() {
		return productTypeService.selectAll();
	}

	@GetMapping(path = "/productindex")
	public String productIndex() {
		return "index";
	}
	
	@GetMapping(path = "insert")
	public String insert() {
		return "insertform";
	}
	
	
	@GetMapping(path = "/productbatch")
	public String productBatch() {
		return "batch";
	}
	
	@GetMapping(path = "update")
	public String update() {
		return "updateform";
	}	
	
	
	
	@GetMapping(path = "delete")
	public String delete(@RequestParam("Product_ID") int id) {
		productService.delete(id);
		return "index";
	}

	
	
	


//	@RequestMapping(path = "insert", method = RequestMethod.POST)
//	public ModelAndView doInsert(@RequestParam("name") String name, @RequestParam("type") String type,
//			@RequestParam("stock") int stock, @RequestParam("cost") double cost, @RequestParam("price") double price,
//			@RequestParam("file") MultipartFile imageFile, HttpServletRequest request)
//			throws IllegalStateException, IOException {
//
//		// 判斷是否要新增產品種類
//		Set<String> productTypeNameResultSet = new HashSet<>();
//		for (ProductType productType : productTypeService.selectAll()) {
//			productTypeNameResultSet.add(productType.getProductType_Name());
//		}
//		if (productTypeNameResultSet.add(type)) {
//			productTypeService.insert(new ProductType(type));
//		}
//
//		// 新增產品
//		Product product = productService.insert(new Product(0, name, type, stock, cost, price, "temp", "temp"));
//
//		// 把圖片儲存到資料夾
//		productService.insertImage(request, product, imageFile);
//
//		return new ModelAndView("redirect:/admin/product/productindex");
//	}

	
//	@RequestMapping(path = "update", method = RequestMethod.POST)
//	public ModelAndView doUpdate(@RequestParam("id") int id, @RequestParam("name") String name,
//			@RequestParam("type") String type, @RequestParam("stock") int stock, @RequestParam("cost") double cost,
//			@RequestParam("price") double price, @RequestParam("image") MultipartFile imageFile,
//			HttpServletRequest request) throws ServletException, IllegalStateException, IOException {
//		String imageName = id + ".jpg";
//
//		// 更新產品
//		Product product = productService.update(new Product(id, name, type, stock, cost, price, imageName, "temp"));
//
//		// 判斷是否要更新圖片
//		if (imageFile.getOriginalFilename() != "") {
//			productService.insertImage(request, product, imageFile);
//		}
//
//		return new ModelAndView("redirect:/admin/product/productindex");
//	}


//	@RequestMapping(path = "batchform", method = RequestMethod.POST)
//	public ModelAndView batch(@RequestParam("idList") ArrayList<Integer> idList) {
//		for (int id : idList) {
//			productService.delete(id);
//		}
//		return new ModelAndView("redirect:/admin/product/productindex");
////		return "product/bathcform";
//	}

}
