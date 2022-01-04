import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddFavorites from "../AddFavorites";

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
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
  const recipeId = dataUrl.split("recipe_")[1];

  // const recipeUri = data.recipe.uri.split(/([recipe_])/)[2];

  const meals = recipe.recipe.mealType;

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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.recipe.label}
        subheader={
          <span>
            <DirectionsRunIcon />
            {recipe.recipe.calories}
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
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/${meals}/${recipeId}`}
          >
            Get Recipe
          </Link>
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <AddFavorites recipe={recipe.recipe} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h5" sx={{ textAlign: "center" }}>
            Ingredients:
          </Typography>
          {recipe.recipe.ingredients.map((ing, index) => {
            return (
              <Typography paragraph key={index}>
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
