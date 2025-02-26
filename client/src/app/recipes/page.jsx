export default async function RecipesPage() {
    try {
        const response = await fetch("http://localhost:8080/api/recipes", {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`API error! Status: ${response.status}`);
        }

        const text = await response.text(); // Read raw response
        let recipes;

        try {
            recipes = JSON.parse(text); // Attempt to parse JSON
        } catch (error) {
            console.error("Invalid JSON:", text);
            throw new Error("Failed to parse JSON");
        }

        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Recipes</h1>
                <ul>
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <li key={recipe.id} className="p-2 border mb-4">
                                <h2 className="font-semibold text-lg">{recipe.name}</h2>
                                <ul className="list-disc pl-5">
                                    <li>Category: {recipe.category}</li>
                                    <li>Preparation Time: {recipe.prepTime} mins</li>
                                    <li>Cooking Time: {recipe.cookTime} mins</li>
                                    <li>Servings: {recipe.serves}</li>
                                    <li>
                                        Ingredients:{" "}
                                        {Array.isArray(recipe.ingredients)
                                            ? recipe.ingredients.join(", ")
                                            : "No ingredients listed"}
                                    </li>
                                    <li>Instructions: {recipe.instructions || "No instructions provided"}</li>
                                </ul>
                            </li>
                        ))
                    ) : (
                        <p>No recipes found.</p>
                    )}
                </ul>
            </div>
        );
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return <p className="text-red-500">Failed to load recipes. Please try again later.</p>;
    }
}