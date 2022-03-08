import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddFavorites from "../AddFavorites";
import { prettyPrintNum, truncate } from "../util";

// material ui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeCard({ recipe }) {
  const dataUrl = recipe.recipe.uri;

  const recipeId = dataUrl.split(/([_])/)[2];

  const meals = recipe.recipe.mealType[0].split(/([/])/)[0];

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="recipeCard" sx={{ width: 340 }}>
      <CardHeader
        sx={{ textAlign: "center" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={
          <h4 className="recipeCard-heading">
            {truncate(recipe.recipe.label, 25)}
          </h4>
        }
        subheader={
          <span className="recipeCard-calories">
            <DirectionsRunIcon />
            {`${prettyPrintNum(recipe.recipe.calories)}`}
          </span>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.recipe.image}
        alt={recipe.recipe.label}
      />
      <CardContent>
        <Button variant="contained">
          <Link to={`/recipe/${meals}/${recipeId}`}>Get Recipe</Link>
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <AddFavorites recipe={recipe.recipe} />
        <IconButton aria-label="share">
          <ShareIcon className="recipeCard-icon" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className="recipeCard-icon" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h4" sx={{ textAlign: "center" }}>
            Ingredients:
          </Typography>
          {recipe.recipe.ingredients.map((ing, index) => {
            return (
              <Typography paragraph variant="h5" key={index}>
                {ing.text}
              </Typography>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeCard;
