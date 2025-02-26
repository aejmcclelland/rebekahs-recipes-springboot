package com.mcclelland.rebekahsrecipes.repository;

import com.mcclelland.rebekahsrecipes.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {
}