package product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import product.model.Product;

@Controller
public class ProductController {
	
	@GetMapping("/index")
	public String processAction() {
		return "index.html";
	}
	
	@Autowired
    private Product product;
	@GetMapping("/P") @ResponseBody
	public Product product() {
		return product;
	}
	
//
//	@Autowired
//	private IProductService productService;
//
//	@Autowired
//	private IProductTypeService productTypeService;
//
//	@GetMapping(path = "/productindex")
//	public String productIndex() {
//		return "product/index";
//	}
//
//	@GetMapping(path = "/productjson")
//	@ResponseBody
//	public List<Product> productJson() {
//		List<Product> productResultList = productService.selectAll();
//		return productResultList;
//	}
//
//	@GetMapping(path = "/producttypejson")
//	@ResponseBody
//	public List<ProductType> productTypeJson() {
//		List<ProductType> productTypeResultList = productTypeService.selectAll();
//		return productTypeResultList;
//	}
//
//	@GetMapping(path = "insert")
//	public String insert() {
//		return "product/insertform";
//	}
//
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
//
//	@GetMapping(path = "update")
//	public String update() {
//		return "product/updateform";
//	}
//
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
//
//	@GetMapping(path = "delete")
//	public ModelAndView doDelete(@RequestParam("Product_ID") int id) {
//		productService.delete(id);
//		return new ModelAndView("redirect:/admin/product/productindex");
//	}
//
//	@RequestMapping(path = "batchform", method = RequestMethod.POST)
//	public ModelAndView batch(@RequestParam("idList") ArrayList<Integer> idList) {
//		for (int id : idList) {
//			productService.delete(id);
//		}
//		return new ModelAndView("redirect:/admin/product/productindex");
////		return "product/bathcform";
//	}

}
