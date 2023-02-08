package com.example.demo.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import com.example.demo.product.Product;
import com.example.demo.service.ProductService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class DemoController {

  @Autowired
  private  ProductService productService;

  @GetMapping
  public String home(){
    return "welcome";
  }

  @PostMapping("/products")
  public Product saveProduct(@RequestBody Product product) {
    return productService.saveProduct(product);
  }

  @GetMapping("/products/{id}")
  public Optional<Product> getProductById(@PathVariable Long id) {
    return productService.getProductById(id);
  }

  @GetMapping("/products")
  public List<Product> getAllProducts() {
    return productService.getAllProducts();
  }

  @DeleteMapping("/products/{id}")
  public void deleteProductById(@PathVariable Long id) {
    productService.deleteProductById(id);
  }

  @GetMapping("/products/search/")
  public List<Product> searchByName(@Param("name") String name) {
      return productService.searchByName(name);
  }
  //update product
    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

}