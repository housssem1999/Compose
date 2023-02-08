package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.product.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository <Product, Long> {
    List<Product> findByName(String name);
    Product findById(long id);

    @Query("SELECT p FROM Product p WHERE p.name LIKE %?1% ")
    public List<Product> search(String keyword);
}
