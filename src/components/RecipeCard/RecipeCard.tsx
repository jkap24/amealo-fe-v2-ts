import { FunctionComponent } from 'react';
import sampleRecipeImage from '../../assets/sausage-pasta.jpeg'
import { IRecipe } from '../../types';

interface IProps {
  recipe: IRecipe
}

const RecipeCard: FunctionComponent<IProps> = ({ recipe }) => {
  return (
    <div className="col my-3">

      <div className="card h-100">
        <img src={sampleRecipeImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">{recipe.description}</p>
        </div>
        <div className="m-3">
          {/* <Button variant="primary">Recipe Details</Button> */}
        </div>

      </div>
    </div>
  );
}

export default RecipeCard;