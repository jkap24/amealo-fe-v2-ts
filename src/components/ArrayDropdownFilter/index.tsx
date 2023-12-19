// A searchable dropdown filter for Arrays of objects - make this extendable
import { FunctionComponent, useState } from 'react';

interface IProps {
    name: string
    idParameter: string
    filterParameter: string
    dataToFilterRecipesBy: {}[] | (() => {}[]) // change this
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
    selectedValues: string[]
}

interface IStringIndex {
    [key: string]: any
}

const ArrayDropdownFilter: FunctionComponent<IProps> = ({ name, idParameter, filterParameter, dataToFilterRecipesBy, setSelectedValues }) => {
    const [data] = useState<{}[]>(dataToFilterRecipesBy)
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchParam] = useState<string[]>([filterParameter]) // add more keys from recipe data if you want to search by it.

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

    function handleValuesSelected(valueCheckedByUser: string) {
        // adds to the array if its not already there, removes if it is
        checkedValues.includes(valueCheckedByUser) ? checkedValues.splice(checkedValues.indexOf(valueCheckedByUser), 1) : checkedValues.push(valueCheckedByUser)
        setCheckedValues(checkedValues)
        const newArray = Array.from(checkedValues)
        setSelectedValues(newArray)
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
                            placeholder={`Search ${name} ...`}
                            value={searchQuery}
                            aria-label="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="list-group list-group-flush" style={{ maxHeight: "10rem", overflow: "scroll" }}>
                    {search(data).map((object: IStringIndex, index: number) => {
                        const objectId = object[idParameter]
                        const objectName = object[filterParameter]
                        return (
                            <label className="list-group-item">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    id={String(objectId)}
                                    value={objectName}
                                    onChange={(e) => handleValuesSelected(e.target.value)}
                                    key={index}
                                />
                                {objectName}
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ArrayDropdownFilter;