// A searchable dropdown filter for string values - make this extendable
import { FunctionComponent, useState } from 'react';
import AmealoRecipeData from '../../data/amealo-recipe-data';
import { IRecipe } from '../../types';

interface IProps {
    name: string
    filterParameter: string
    selectedStringValues: string[]
    setSelectedStringValues: React.Dispatch<React.SetStateAction<string[]>>
}

interface IStringIndex {
    [key: string]: any
}

const StringDropdownFilter: FunctionComponent<IProps> = ({ name, filterParameter, setSelectedStringValues }) => {
    const [amealoRecipeData] = useState<IRecipe[]>(AmealoRecipeData.amealoRecipes)
    const [checkedStrings, setCheckedStrings] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParam] = useState<string[]>([filterParameter])

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

    function handleStringSelected(searchParameter: string) {
        // adds to the array if its not already there, removes if it is
        checkedStrings.includes(searchParameter) ? checkedStrings.splice(checkedStrings.indexOf(searchParameter), 1) : checkedStrings.push(searchParameter)
        setCheckedStrings(checkedStrings)
        const newArray = Array.from(checkedStrings)
        setSelectedStringValues(newArray)
    }

    // used as part of the check for unique values within dropdown box
    let uniqueValues: string[] = [];

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
                            placeholder={`Search ${name} ...`}
                            value={searchQuery}
                            aria-label="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="list-group list-group-flush" style={{ maxHeight: "10rem", overflow: "scroll" }}>
                    {
                        search(amealoRecipeData).map((recipe: IStringIndex, index: number) => {
                            const recipeId = recipe.id
                            const searchParameter: string = recipe[filterParameter]
                            if (!uniqueValues.includes(searchParameter)) {
                                uniqueValues.push(searchParameter)
                                return (
                                    <label className="list-group-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            id={String(recipeId)}
                                            value={searchParameter}
                                            onChange={(e) => handleStringSelected(e.target.value)}
                                            key={index}
                                        />
                                        {searchParameter}
                                    </label>
                                )
                            } else return null;
                        })}
                </div>
            </div>
        </div>
    );
}

export default StringDropdownFilter;