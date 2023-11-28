export interface IRecipe {
    id: number;
    name: string;
    mealTime: string;
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