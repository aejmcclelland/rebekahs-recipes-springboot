const API_URL = 'http://localhost:8080/api';

export const fetchRecipes = async () => {
	try {
		const res = await fetch(`${API_URL}/recipes`);
		if (!res.ok) throw new Error('Failed to fetch recipes');
		return await res.json();
	} catch (error) {
		console.error('Error fetching recipes:', error);
		return [];
	}
};

export const addRecipe = async (recipe) => {
	const res = await fetch(`${API_URL}/recipes`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(recipe),
	});
	return res.json();
};
