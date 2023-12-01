import { FunctionComponent } from "react";

interface IProps {
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const AmealoNavBar: FunctionComponent<IProps> = ({ searchQuery, setSearchQuery }) => {


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
                        <div className="input-group me-auto" role="search" style={{ width: "65%" }}>
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="form-control"
                                placeholder="Search Recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onClick={() => console.log('Open suggestions')}
                            />
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
            </nav>
        </>
    );
}

export default AmealoNavBar;