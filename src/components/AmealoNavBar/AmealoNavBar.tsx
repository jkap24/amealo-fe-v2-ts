import { FunctionComponent } from "react";
import { IRecipe } from '../../types';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

interface IProps {
    recipeObjectsArray: IRecipe[]
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const AmealoNavBar: FunctionComponent<IProps> = ({ recipeObjectsArray, setSearchQuery }) => {

    const handleOnClear = () => {
        console.log('Focused')
        setSearchQuery("")
    }

    const handleOnSearch = (string: string, results: IRecipe[]) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result: IRecipe) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item: IRecipe) => {
        // the item selected
        console.log(item)
        setSearchQuery(item.name)
    }

    const handleOnFocus = () => {
        console.log('Focused')
        setSearchQuery("")
    }

    const formatResult = (item: IRecipe) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-static">
                <div className="container">
                    <a className="navbar-brand" href="/home">Amealo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/drag">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/filterRecipes">Recipes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="me-auto" style={{ width: "60%" }}>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item" style={{ width: "100%", zIndex: "999" }}>
                                    <ReactSearchAutocomplete
                                        items={recipeObjectsArray}
                                        showNoResults={false}
                                        onClear={handleOnClear}
                                        onSearch={handleOnSearch}
                                        onHover={handleOnHover}
                                        onSelect={handleOnSelect}
                                        onFocus={handleOnFocus}
                                        autoFocus
                                        formatResult={formatResult}
                                        className="dropdown"
                                        placeholder="Search for recipes"
                                        fuseOptions={
                                            {
                                                keys: ["name"],
                                                minMatchCharLength: 2
                                            }
                                        }
                                        styling={
                                            {
                                                height: "35px",
                                                fontSize: "14px"
                                            }
                                        }

                                    />
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Favourites</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default AmealoNavBar;