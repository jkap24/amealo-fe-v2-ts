// A searchable dropdown filter for string values - make this extendable
import { FunctionComponent, useState } from 'react';
import IngredientsData from '../../data/ingredients-data';
import { IIngredient } from '../../types';

interface IProps {
    name: string
    selectedIngredients: string[]
    setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>
}

const RecipeDropdownFilter: FunctionComponent<IProps> = ({ name, selectedIngredients, setSelectedIngredients }) => {
    const [ingredientsData] = useState<IIngredient[]>(IngredientsData.ingredients)
    const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParam] = useState<string[]>(["name"]) // add more keys from recipe data if you want to search by it.

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

    function handleIngredientSelected(ingredientName: string) {
        // adds to the array if its not already there, removes if it is
        checkedIngredients.includes(ingredientName) ? checkedIngredients.splice(checkedIngredients.indexOf(ingredientName), 1) : checkedIngredients.push(ingredientName)
        setCheckedIngredients(checkedIngredients)
        const newArray = Array.from(checkedIngredients)
        setSelectedIngredients(newArray)
    }
    return (
        <div className="mb-2 mt-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                {name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ width: "20rem" }}>
                <div className='sticky-top'>
                    <form className="d-flex m-3" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Ingredients..."
                            value={searchQuery}
                            aria-label="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="list-group list-group-flush" style={{ maxHeight: "10rem", overflow: "scroll" }}>
                    {search(ingredientsData).map((ingredient: IIngredient, index: number) => {
                        const ingredientId = ingredient.ingredient_id
                        const ingredientName = ingredient.name
                        return (
                            <label className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    id={String(ingredientId)}
                                    value={ingredientName}
                                    onChange={(e) => handleIngredientSelected(e.target.value)}
                                    key={index}
                                />
                                {ingredientName}
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default RecipeDropdownFilter;