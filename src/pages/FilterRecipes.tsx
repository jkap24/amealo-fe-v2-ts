import { FunctionComponent, useState } from 'react';
import AmealoRecipeData from '../data/amealo-recipe-data';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { IRecipe } from '../types';
import RecipeDropdownFilter from '../components/RecipeDropdownFilter/RecipeDropdownFilter';
import AmealoNavBar from '../components/AmealoNavBar/AmealoNavBar';
import StringDropdownFilter from '../components/StringDropdownFilter/StringDropdownFilter';

// Filtering Functionality Initial Requirements

// Select recipes that:
// (have chrohns friendly dietary requirements) AND (belong to Diet Type High Protein OR Low Carb)

// Select recipes that:
// (have the ingredients Carrots OR Spinach)

const FilterRecipes: FunctionComponent = () => {

    const [recipeObjectsArray] = useState<IRecipe[]>(AmealoRecipeData.amealoRecipes)
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParam] = useState<string[]>(["name"]) // add more keys from recipe data if you want to search by it.
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [selectedmealTime, setSelectedmealTime] = useState<string[]>([]);


    function search(items: any[]) {
        return items.filter((item: any) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) > -1
                );
            });
        });
    }

    // Function to filter recipes based on ingredient IDs
    function filterRecipesByIngredientId(recipes: IRecipe[], ingredients: string[]) {
        if (ingredients.length === 0) {
            return recipes;
        } else
            return recipes.filter(recipe => {
                return recipe.ingredients.some((ingredient: { name: string; }) => ingredients.includes(ingredient.name))
            }

            );
    }

    const filteredRecipes: IRecipe[] = filterRecipesByIngredientId(recipeObjectsArray, selectedIngredients);

    return (
        <>
            <AmealoNavBar
                recipeObjectsArray={filteredRecipes}
                setSearchQuery={setSearchQuery}
            />
            <div className='container'>
                <RecipeDropdownFilter
                    name="Ingredients"
                    setSelectedIngredients={setSelectedIngredients}
                    selectedIngredients={selectedIngredients}
                />
                <StringDropdownFilter
                    name="Meal"
                    setSelectedStringValues={setSelectedmealTime}
                    selectedStringValues={selectedmealTime}
                />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {search(filteredRecipes).map((recipe: IRecipe) => {
                        console.log(recipe.name);
                        return (
                            <RecipeCard recipe={recipe} />
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default FilterRecipes;
