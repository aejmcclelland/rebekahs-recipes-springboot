package com.mcclelland.rebekahsrecipes.service;

import com.mcclelland.rebekahsrecipes.model.Recipe;
import com.mcclelland.rebekahsrecipes.repository.RecipeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
}