package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.product.Product;
import com.example.demo.repo.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository ProductRep;

    public Product saveProduct(Product product) {
        return ProductRep.save(product);
    }

    public Optional<Product> getProductById(Long id) {
        return ProductRep.findById(id);
    }

    public List<Product> getAllProducts() {
        return ProductRep.findAll();
    }

    public void deleteProductById(Long id) {
        ProductRep.deleteById(id);
    }

    public List<Product> searchByName(String name) {
        if (name == null || name.isEmpty()) {
            return ProductRep.findAll();
        }
        return ProductRep.search(name);
    }
    public Product updateProduct( Long id, Product product) {
        ProductRep.findById(id)
                .map(p -> {
                    p.setName(product.getName());
                    p.setPrice(product.getPrice());
                    p.setDescription(product.getDescription());
                    return ProductRep.save(p);
        });
        return null;
    }
}
