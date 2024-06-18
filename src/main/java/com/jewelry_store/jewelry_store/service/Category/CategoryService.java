package com.jewelry_store.jewelry_store.service.Category;


import com.jewelry_store.jewelry_store.model.Category;

public interface CategoryService {

    public Category createCategory(Category name) throws Exception;

    public Category findCategoryById(Long id) throws Exception;

    public Category findCategoryByName(Category name) throws Exception;

}
