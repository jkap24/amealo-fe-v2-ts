export interface IRecipe {
    id: number;
    name: string;
    mealTime: string;
    description: string;
    ingredients: {
        id: number;
        name: string;
        quantity: string;
        unit: string;
    }[];
    appliances: string[];
    recommendedProducts: string[];
    DietaryRequirements: string[];
    DietType: string[];
    CookingMethod: string[];
    cuisine: string;
}

export interface IIngredient {
    ingredient_id: number;
    name: string;
    nutritional_info: {
        calories: number;
        protein: number;
        carbohydrates: number;
        fat: number;
        fiber: number;
    };
    ingredientCategory: string[];
}