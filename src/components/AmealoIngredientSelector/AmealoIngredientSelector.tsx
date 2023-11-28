import React, { useState, useEffect } from "react";
import IngredientsData from "../../data/ingredients-data";

function AmealoIngredientSelector(props: any) {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  function handleIngredientSelected(ingredientName: string) {
    // adds to the array if its not already there, removes if it is
    checkedIngredients.includes(ingredientName) ? checkedIngredients.splice(checkedIngredients.indexOf(ingredientName), 1) : checkedIngredients.push(ingredientName)
    setCheckedIngredients(checkedIngredients)
    console.log(checkedIngredients)
    const newArray = Array.from(checkedIngredients)
    console.log(newArray)
    props.setSelectedIngredients(newArray)
  }

  return (
    <>
      <div className="col mb-3 mt-3">
        <div className="card">
          <div className="card-body">

            <div className="row">
              <div className="col">
                <p>Ingredients</p>
              </div>
              <div className="col mb-3">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                {IngredientsData.ingredients.map((ingredient, index) => {
                  const ingredientId = ingredient.ingredient_id
                  const ingredientName = ingredient.name
                  return (
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={String(ingredientId)}
                        value={ingredientName}
                        onChange={(e) => handleIngredientSelected(e.target.value)}
                        key={index}
                      />
                      <label className="form-check-label" htmlFor={String(ingredientId)}>
                        {ingredientName}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AmealoIngredientSelector;
