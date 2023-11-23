import React, { useContext, useEffect, useState } from 'react';
import AmealoRecipeData from '../data/amealo-recipe-data';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import AmealoIngredientSelector from '../components/AmealoIngredientSelector/AmealoIngredientSelector';

// Filtering Functionality Initial Requirements

// Select recipes that:
// (have chrohns friendly dietary requirements) AND (belong to Diet Type High Protein OR Low Carb)

// Select recipes that:
// (have the ingredients Carrots OR Spinach)

function FilterRecipes() {
    const [recipeObjectsArray] = useState(AmealoRecipeData.amealoRecipes)
    // const [recipeArray, setRecipeArray] = useState(recipeObjectsArray)

    const [searchQuery, setSearchQuery] = useState("");
    const [searchParam] = useState(["name", "DietType", "mealTime", "ingredients"]) // add more keys from recipe data if you want to search by it.
    const [selectedIngredients, setSelectedIngredients] = useState([]);


    function search(items: any) {
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
    function filterRecipesByIngredientId(recipes: any[], ingredients: string | any[]) {
        console.log(ingredients)
        if (ingredients.length === 0) {
            return recipes;
        } else
            return recipes.filter(recipe => {
                return recipe.ingredients.some((ingredient: { name: string; }) => ingredients.includes(ingredient.name))
            }

            );
    }

    const filteredRecipes = filterRecipesByIngredientId(recipeObjectsArray, selectedIngredients);

    filteredRecipes.forEach(recipe => console.log(recipe.name));

    // useEffect(() => {
    //     //Runs on the first render
    //     //And any time any filteredRecipes(dependency) value changes
    //     console.log(selectedIngredients)
    // }, [selectedIngredients]);

    return (
        <>
            <div className='container'>
                <div className="mb-2 mt-4">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="form-control"
                        placeholder="Search Recipes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="mb-2 mt-4">
                    <AmealoIngredientSelector
                        setSelectedIngredients={setSelectedIngredients}
                        selectedIngredients={selectedIngredients}
                    />
                </div>
                <div className="mb-2 mt-4">

                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Diet Type
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{width: "20rem"}}>
                        <form className="d-flex m-3" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                        <div className="list-group list-group-flush">
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                First checkbox
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Second checkbox
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Third checkbox
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Fourth checkbox
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Fifth checkbox
                            </label>
                        </div>
                    </div>

                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {search(filteredRecipes).map((recipe: { name: any; }) => {
                        return (
                            <RecipeCard name={recipe.name} />
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default FilterRecipes;
