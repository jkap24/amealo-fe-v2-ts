import { FunctionComponent, useEffect, useState } from 'react';
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

    const [recipeObjectsArray, setRecipeObjectsArray] = useState<IRecipe[]>(AmealoRecipeData.amealoRecipes)
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParam] = useState<string[]>(["name"]) // add more keys from recipe data if you want to search by it.
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [selectedmealTime, setSelectedmealTime] = useState<string[]>([]);
    const [resultsFound, setResultsFound] = useState(true);

    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: 'American' },
        { id: 2, checked: false, label: 'Chinese' },
        { id: 3, checked: false, label: 'Italian' },
    ]);


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

        // // Rating Filter
        // if (selectedRating) {
        //     updatedList = updatedList.filter(
        //         (item) => parseInt(item.rating) === parseInt(selectedRating)
        //     );
        // }

        // // Category Filter
        // if (selectedCategory) {
        //     updatedList = updatedList.filter(
        //         (item) => item.category === selectedCategory
        //     );
        // }

        // Mealtime Filter
        if (selectedmealTime.length) {
            updatedRecipeArray = updatedRecipeArray.filter(recipe => selectedmealTime.includes(recipe.mealTime))
        } 
            
            


        // // Cuisine Filter
        // const cuisinesChecked = cuisines
        //     .filter((item) => item.checked)
        //     .map((item) => item.label.toLowerCase());

        // if (cuisinesChecked.length) {
        //     updatedList = updatedList.filter((item) =>
        //         cuisinesChecked.includes(item.cuisine)
        //     );
        // }

        // Ingredients Filter
        if (selectedIngredients.length) {
            updatedRecipeArray = updatedRecipeArray.filter(recipe => {
                return recipe.ingredients.some((ingredient: { name: string; }) => selectedIngredients.includes(ingredient.name))
            });
        } 
        return updatedRecipeArray
            
        // if (selectedIngredients.length === 0) {
        //     return updatedRecipeArray
        // } else
        //     updatedRecipeArray = updatedRecipeArray.filter(recipe => {
        //         return recipe.ingredients.some((ingredient: { name: string; }) => selectedIngredients.includes(ingredient.name))
        //     });

        // return updatedRecipeArray

        // setRecipeObjectsArray(updatedRecipeArray);

        // !updatedRecipeArray.length ? setResultsFound(false) : setResultsFound(true);
    };

    useEffect(() => {
        applyFilters();
      }, [selectedIngredients]);

    // const filteredRecipes: IRecipe[] = filterRecipesByIngredientId(recipeObjectsArray, selectedIngredients);
    const filteredRecipes: IRecipe[] = applyFilters();

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
