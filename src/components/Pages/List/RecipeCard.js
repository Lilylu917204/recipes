import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddFavorites from "components/Pages/List/AddFavorite";
import { prettyPrintNum, truncate } from "common/util";
import {
  MaterialCard,
  MaterialIcon,
  MaterialButton,
  MaterialStyled,
} from "common/materialUI";
import { recipeIdSplit, recipeMealSplit } from "common/util";

const ExpandMore = MaterialStyled.styled((props) => {
  const { expand, ...other } = props;
  return <MaterialIcon.IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeCard({ recipe }) {
  const dataUrl = recipe.uri;

  const recipeId = recipeIdSplit(dataUrl);

  const meals = recipeMealSplit(recipe.mealType[0]);

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="recipeCard">
      <MaterialCard.Card className="recipeCard__cards" sx={{ width: 340 }}>
        <MaterialCard.CardHeader
          sx={{ textAlign: "center" }}
          title={
            <h4 className="recipeCard-heading u-margin-bottom-small">
              {truncate(recipe.label, 20)}
            </h4>
          }
          subheader={
            <span className="paragraph">
              <MaterialIcon.DirectionsRunIcon />
              {`${prettyPrintNum(recipe.calories)}`}
            </span>
          }
        />
        <MaterialCard.CardMedia
          component="img"
          height="194"
          image={recipe.image}
          alt={recipe.label}
        />
        <MaterialCard.CardContent>
          <MaterialButton.Button variant="contained">
            <Link
              to={`/recipe/${meals}/${recipeId}`}
              className="recipeCard__link"
            >
              Get Recipe
            </Link>
          </MaterialButton.Button>
        </MaterialCard.CardContent>

        <MaterialCard.CardActions disableSpacing>
          <AddFavorites recipe={recipe} />
          <MaterialIcon.IconButton aria-label="share">
            <MaterialIcon.ShareIcon className="recipeCard-icon" />
          </MaterialIcon.IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MaterialIcon.ExpandMoreIcon className="recipeCard-icon" />
          </ExpandMore>
        </MaterialCard.CardActions>
        <MaterialCard.Collapse in={expanded} timeout="auto" unmountOnExit>
          <MaterialCard.CardContent>
            <div className="heading-tertiary u-center-text u-margin-bottom-medium">
              Ingredients:
            </div>
            {recipe.ingredients.map((ing) => {
              return (
                <div key={ing.image} className="paragraph">
                  {ing.text}
                </div>
              );
            })}
          </MaterialCard.CardContent>
        </MaterialCard.Collapse>
      </MaterialCard.Card>
    </div>
  );
}

export default RecipeCard;
