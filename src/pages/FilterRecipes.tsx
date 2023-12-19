import { FunctionComponent, useState } from 'react';
import AmealoRecipeData from '../data/amealo-recipe-data';
import IngredientsData from '../data/ingredients-data';
import CuisineData from '../data/cuisine-data';
import DietTypeData from '../data/diet-type-data';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { IRecipe } from '../types';
import AmealoNavBar from '../components/AmealoNavBar/AmealoNavBar';
import StringDropdownFilter from '../components/StringDropdownFilter/StringDropdownFilter';
import ArrayDropdownFilter from '../components/ArrayDropdownFilter';

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
    const [selectedDietType, setSelectedDietType] = useState<string[]>([]);
    const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);


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

    const applyFilters = () => {
        let updatedRecipeArray = recipeObjectsArray;

        // Cuisine Filter
        if (selectedCuisine.length) {
            updatedRecipeArray = updatedRecipeArray.filter(recipe => {
                return recipe.cuisine.some((type: { name: string; }) => selectedCuisine.includes(type.name))
            });
        }

        // Mealtime Filter
        if (selectedmealTime.length) {
            updatedRecipeArray = updatedRecipeArray.filter(recipe => selectedmealTime.includes(recipe.mealTime))
        }

        // Diet Type Filter
        if (selectedDietType.length) {
            updatedRecipeArray = updatedRecipeArray.filter(recipe => {
                return recipe.DietType.some((type: { name: string; }) => selectedDietType.includes(type.name))
            });
        }

        // Ingredients Filter
        if (selectedIngredients.length) {
            updatedRecipeArray = updatedRecipeArray.filter(recipe => {
                return recipe.ingredients.some((ingredient: { name: string; }) => selectedIngredients.includes(ingredient.name))
            });
        }
        return updatedRecipeArray
    };

    const filteredRecipes: IRecipe[] = applyFilters();

    return (
        <>
            <AmealoNavBar
                recipeObjectsArray={filteredRecipes}
                setSearchQuery={setSearchQuery}
            />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-auto'>
                        <StringDropdownFilter
                            name="Meals"
                            filterParameter='mealTime'
                            setSelectedStringValues={setSelectedmealTime}
                            selectedStringValues={selectedmealTime}
                        />
                    </div>
                    <div className='col-md-auto'>
                        <ArrayDropdownFilter
                            name="Ingredients"
                            idParameter="ingredient_id"
                            dataToFilterRecipesBy={IngredientsData.ingredients}
                            filterParameter="name"
                            setSelectedValues={setSelectedIngredients}
                            selectedValues={selectedIngredients}
                        />
                    </div>
                    <div className='col-md-auto'>
                        <ArrayDropdownFilter
                            name="Diet Types"
                            idParameter="id"
                            dataToFilterRecipesBy={DietTypeData.dietTypes}
                            filterParameter="name"
                            setSelectedValues={setSelectedDietType}
                            selectedValues={selectedDietType}
                        />
                    </div>
                    <div className='col-md-auto'>
                        <ArrayDropdownFilter
                            name="Cuisines"
                            idParameter="id"
                            dataToFilterRecipesBy={CuisineData.cuisine}
                            filterParameter="name"
                            setSelectedValues={setSelectedCuisine}
                            selectedValues={selectedCuisine}
                        />
                    </div>
                </div>
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
