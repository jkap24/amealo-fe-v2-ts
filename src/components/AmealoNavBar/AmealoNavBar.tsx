import React from 'react';
// import GenerateMealPlanModal from '../GenerateMealPlanModal/GenerateMealPlanModal';

function AmealoNavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-static">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Amealo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/drag">DragnDrop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/filterRecipes">Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div className='row mb-2 mt-2 pe-2'>
                            <div className='col'>
                                {/* <GenerateMealPlanModal /> */}
                            </div>
                        </div>
                        <div className='row mb-2 mt-2'>
                            <div className='col'>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AmealoNavBar;