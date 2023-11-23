import React from 'react';
import PropTypes from 'prop-types';
import sampleRecipeImage from '../../assets/sausage-pasta.jpeg'


function RecipeCard(props: any) {
  return (
    <div className="col my-3">

      <div className="card h-100">
        <img src={sampleRecipeImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="m-3">
          {/* <Button variant="primary">Recipe Details</Button> */}
        </div>

      </div>
    </div>
  );
}


RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
};

RecipeCard.defaultProps = {
  name: 'Guest',
};

export default RecipeCard;